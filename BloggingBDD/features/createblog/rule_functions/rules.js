module.exports = class createBlog {

    addBlog = (blogObject) => {
        if (blogObject.blogContent === "") {
            return 'Content seems to be missing'
        } else if (blogObject.blogTitle === "") {
            return 'Title seems to be missing'
        } else {
            return 'Blog has been successfully saved!'
        }
    }

    updateBlog = (updateBlogObject) => {
        if (updateBlogObject.newBlogTitle === "") {
            return 'Title seems to be missing'
        } else if (updateBlogObject.newBlogContent === "") {
            return 'Content seems to be missing'

        } else {
            return 'Successfully edited'
        }
    }
    deleteBlog = (blogStatus) => {
        const deleteBlogObject = {
            currentStatus: 'deleted',
            reponseMessage: 'Successfully note deleted'
        }
        return deleteBlogObject;
    }

   
}

