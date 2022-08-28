class createpostByAPI {
    createNewArticlePost(
        title?: string,
        description?: string,
        body?: string,
        tagList?: string
        ) {
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
}
export default createpostByAPI