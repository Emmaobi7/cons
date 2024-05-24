from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import BlogPost, Comment
from django.shortcuts import get_object_or_404
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
import json
# Create your views here.

@csrf_exempt
def blog_list(request):
    """
    blog_list: create/list all blog posts
    methods:
        GET: list all blog posts
        POST: create a new blog post
    return: json response
    """
    if request.method == 'GET':
        posts = BlogPost.objects.all()

        page = request.GET.get('page', 1)
        per_page = request.GET.get('per_page', 10)

        paginator = Paginator(posts, per_page)

        try:
            services_page = paginator.page(page)
        except PageNotAnInteger:
            services_page = paginator.page(1)
        except EmptyPage:
            services_page = paginator.page(paginator.num_pages)


        post_data = [{"id": post.id, "title": post.title, "author": post.author, "category": post.category, 
                    "content": post.content, "image_url": post.image_url, 
                    "date_published": post.date_published, 
                    "day": post.day, "month": post.month, 
                    "year": post.year} for post in services_page]
        
        response = {
            "total": paginator.count,
            "num_pages": paginator.num_pages,
            "current_page": services_page.number,
            "data": post_data
        }
       

        return JsonResponse(response, safe=False)
    
    if request.method == 'POST':
        data = json.loads(request.body)
        new_post = BlogPost.objects.create(
            title=data['title'],
            author=data['author'],
            category=data['category'],
            content=data['content'],
            image_url=data['image_url']
        )

        return JsonResponse({"id": new_post.id, 
                             'title': new_post.title, 
                             'author': new_post.author, 
                             'date_published': new_post.date_published}, 
                             status=201)
    


def blog_detail(request, pk):

    """
    blog_detail: retrieve blog post by primary key(ID)
    args:
        pk: primary key of blog post to be retrieved
    return: json response
    """
    try:
        post = BlogPost.objects.get(pk=pk)
        post_data = {"title": post.title, 
                     "author": post.author, 
                     "category": post.category, 
                     "content": post.content,
                     "image_url": post.image_url, 
                     "date_published": post.date_published}
        return JsonResponse(post_data)
    except BlogPost.DoesNotExist:
        return JsonResponse({"error": "Blog post not found"}, status=404)



@csrf_exempt
def comment(request, pk):
    """
    comment: handles retrieval and creation of comments
    methods:
        GET: retrieve all comments
        POST: create a new comment
    args:
        pk: primary key of record to retrieve
    return: json response
    """
    post = get_object_or_404(BlogPost, pk=pk)

    if request.method == 'GET':
        comments = post.comments.all()
        comment_data = [{"author": c.author, 
                         "content": c.content, 
                         "date_posted": c.date_posted, 
                         "day": c.day, 
                         "month": c.month, 
                         "year": c.year} for c in comments]
        return JsonResponse(comment_data, safe=False)

    if request.method == 'POST':
        data = json.loads(request.body)
        author = data.get("author")
        content = data.get("content")
        


        try:
            Comment.objects.create(post=post, author=author, content=content)

            return JsonResponse({"success": "comment created successfully"}, status=201)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)
