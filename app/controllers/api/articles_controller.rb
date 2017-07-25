class Api::ArticlesController < Api::ApiController

  def index
    render :json => Article.all
  end

  def show
    render :json => Article.find(params[:id])
  end

  def create
    article = Article.new(create_params(params))

    if article.save
      render :json => Article.find(article.id)
    else

    end
  end

  def update
    article = Article.find(params[:id])

    if article.update(update_params(params))
      render :json => Article.find(article.id)
    else

    end
  end

  def destroy
    article = Article.find(params[:id])
    article.destroy


  end

  private
  def create_params(params)
    params.permit(:title, :text)
  end

  def update_params(params)
    params.permit(:title, :text)
  end
end
