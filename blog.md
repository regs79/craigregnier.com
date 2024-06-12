---
layout: layout.html
title: Blog
---

{% for post in collections.posts %}
  <h2><a href="{{ post.url }}">{{ post.data.title }}</a></h2>
  <p>{{ post.content }}</p>
{% endfor %}