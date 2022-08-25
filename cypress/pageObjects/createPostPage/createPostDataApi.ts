//Cypress.config("baseUrl", "https://api.realworld.io/api");

class createPostDataApi {
  createNewArticle(
    title?: string,
    description?: string,
    body?: string,
    tagList?: string
  ) {
    this.deleteArticleByTitle(title);
    return cy
      .request({
        method: "POST",
        url: `https://api.realworld.io/api/articles`,
        body: {
          article: { title, description, body, tagList },
        },
        headers: {
          authorization: `Token ${localStorage.getItem("jwt")}`,
        },
      })
      .then((res) => res.body);
  }

  private deleteArticleBySlug(slug?: string) {
    cy.request({
      method: "DELETE",
      url: `https://api.realworld.io/api/articles/${slug}`,
      headers: {
        authorization: `Token ${localStorage.getItem("jwt")}`,
      },
    }).then((res) => res?.body);
  }

  getArticleByTitle(title?: string) {
    return cy
      .request({
        method: "GET",
        url: `https://api.realworld.io/api/articles`,
        headers: {
          authorization: `Token ${localStorage.getItem("jwt")}`,
        },
      })
      .then((res) => {
        const articles = res.body.articles;
        const article = articles.find((a) => a.title === title);
        return article || null;
      });
  }

  deleteArticleByTitle(title: string) {
    this.getArticleByTitle(title).then((article) => {
      if (article) {
        this.deleteArticleBySlug(article.slug);
      }
    });
  }

  private updateArticleBySlug(
    slug?: string,
    newtitle?: string,
    description?: string,
    body?: string,
    tagList?: string
  ) {
    return cy
      .request({
        method: "PUT",
        url: `https://api.realworld.io/api/articles/${slug}`,
        body: {
          article: { slug, newtitle, description, body, tagList },
        },
        headers: {
          authorization: `Token ${localStorage.getItem("jwt")}`,
        },
      })
      .then((res) => {
        res.body;
        // console.log(res.body, "hello"), console.log(newtitle);
      });
  }

  updatebytitle(title, newtitle) {
    this.getArticleByTitle(title).then((article) => {
      if (article) {
        this.updateArticleBySlug(article.slug, newtitle).then((res) => {
          console.log("hhhhhhh", article.slug);
        });
      }
    });
  }
}
export default createPostDataApi;
