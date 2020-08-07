module.exports = class createBlogCategory {

    addBlogCategory = (blogCategoryObject) => {
        if (blogCategoryObject.blogCategoryTitle === "") {
            return 'Title seems to be missing'
        } else {
            return 'Blog Category has been successfully saved!'
        }
    }

    updateBlogCategory = (updateBlogCategoryObject) => {
        if (updateBlogCategoryObject.newBlogCategoryTitle === "") {
            return 'Title seems to be missing'
        } else {
            return 'Successfully edited'
        }
    }
    deleteCategoryBlog = (blogCategoryStatus) => {
        const deleteBlogCategoryObject = {
            currentStatus: 'deleted',
            reponseMessage: 'Successfully note deleted'
        }
        return deleteBlogCategoryObject;
    }

   
}

