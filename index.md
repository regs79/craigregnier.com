---
layout: layout.njk
title: Craig Regnier
---

{% for post in collections.posts %}
  <h2><a href="{{ post.url }}">{{ post.data.title }}</a></h2>
{% endfor %}