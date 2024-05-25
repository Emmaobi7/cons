## Consultant

## This project is live at https://cons-1.onrender.com/
* 
CONSULTER is a cybersecurity consulting company that provides cutting-edge security solutions to protect businesses from  ever evolving cyber threats, ensuring their data and systems remain secure and resilient.


## GOAL AND OBJECTIVE
* Promoting cybersecurity services and awareness
* Establishing expertise
* Attracting clients
* Providing valuable resources

<h4>note: This documentation conatain sthe technicalities of the consultant project</h4>

## Technologies
This project was buit with:
* Frontend: HTML, CSS AND JAVASCRIPT
* Backent: PYTHON(DJANGO FRAMEWORK)
* Third_party-services: bootstrap for styling and responsiveness, axios for api requests and jquery to save time haha.

## How to start
* To start this app simply 
```
cd consultant/consultant_api
```

* will take you to the prject directory then you simplyenter the command (for linux)
```
python3 -r install requirements.py
```
* (for windows)

```
python -r install requirement.py
```

* Then you have to start the local development server with the command

```
python3 manage.py runserver
```

* This will spin up your localhost server on port 8000 by default


<h4>note:This project is built on django 4.7</h4>




* (now to the good part)
## API ENDPOINTS


## PROJECTS
* GET /api/projects: list all projects
* GET /api/projects/{id}: Retrieve project by id
* POST /api/projects: create a new project


<h4>Sample snippet to get all projects</h4>

```
def project_list(request):
    """
    project_list: create/list all projects
    methods:
        GET: list all projects
        POST: create a new project
    return: json response
    """
    if request.method == "GET":
        projects = Projects.objects.all()
        project_data = [{"title": project.title,
                         "id": project.id, 
                         "category": project.category,
                         "image_url": project.image_url, 
                         "content": project.content, 
                         "challenge": project.challenge, 
                         "client": project.client, 
                         "address": project.address,
                         "year": project.year, 
                         "date_created": project.date_created} for project in projects]
        
        return JsonResponse(project_data, safe=False)

```


## BLOG POSTS
* GET /api/blogs: list all blog posts
* GET /api/blogs/{id}: retrieve blog post by id 
* POST /api/blogs: create a new blog post

<h4>sample snippet to retrieve a blog post</h4>

```
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

```




## COMMENTS
* GET /api/comments: list all comments
* GET /api/comments/{id}: retrieve comment by id
* POST /api/comments: create a new comment
<h4>sample snippet</h4>

```
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
```



## CONTACT FORM
* POST /api/contact: submit a contact form

## SERVICES
* GET /api/service: list all services
* GET /api/service/{id}: retrieve service by id
<h4>sample snippet</h4>

```
def service_detail(request, pk):
    """
    service: retrieve service records by id
    args:
        pk: primary key to retrieve record
    return: json data
    """
    try:
        s = Service.objects.get(pk=pk)
        s_data = {
            "title": s.title,
            "description_1": s.description_1,
            "description_2": s.description_2,
            "description_3": s.description_3,
            "challenge": s.challenge,
            "image_url": s.image_url,
        }

        return JsonResponse(s_data)
    except Service.DoesNotExist:
        return JsonResponse({"error": "service not found"}, status=404)
```


## TEAM
* GET /api/team: list the team
* GET /api/team/{id}: retrieve team member details by id

<h4>sample snippet</h4>

```
def team_detail(request, pk):
    """
    team_detail: retrieve team member by ID
    args:
        pk: primary key to retrieve record
    return: json data
    """

    try:
        t = Team.objects.get(pk=pk)
        t_data = {  "name": t.name,
                    "id": t.id, 
                    "role": t.role, 
                    "description": t.description, 
                    "gender": t.gender, 
                    "qualification": t.qualification, 
                    "email": t.email, 
                    "nationality": t.nationality,
                    "image_url": t.image_url, 
                    "job_exp": t.job_exp, 
                    "educational_exp": t.educational_exp, 
                    "first_skill": t.first_skill, 
                    "second_skill": t.second_skill, 
                    "third_skill": t.third_skill, 
                    "date_joined": t.date_joined }
        
        return JsonResponse(t_data)
    except Team.DoesNotExist:
        return JsonResponse({"error": "member not found"}, status=404)
```


### KNOWN BUGS
* The text formatting in the blogs is awful i know(no loud am).
* security: the api could be better secure
* Feel free to find the next bug.


### IMPROVEMENTS

* Using mailChimp or any external email service provider that suits our need
* The pricing table page is not set at all (except it tells you the price which i think is fair (: ))
* Lots of uncessary javascrip runing making our service slow (we're sorry (: ))


### SOURCES OF INSPIRATION AND RESOURCES
<h3>Les give credit where its due</h3>
<p>All the cyber security materials were gotten from prestegious cyber security service providers namely</p>

* https://www.cobalt.io
* https://www.fortra.com/
* https://www.rapid7.com/

and finally myself (yup thats right), if you read this and is interested in cybersecurity hit me Legend
I have been investing my time in learning cybersecurity and offensive security, so i know a thing or two and i was
definitely motivated to do this. smiles :) .


### If you need me, or like me, or have a crush on me.

* feel free hit me up i dont judge

<hr>
emma46574@gmail.com

<h4>security tip:</h4>
<p>Never share too much of your personal information online</p>
<p>Always use a password manager</p>
<p>Never use same password for different accounts</p>

<hr>
Feel free to fork this repo and be creative (meself don tire walahi (: ))
looking forward to hearing from you

