---
layout: layout.njk
title: "Posts"
lang: en
tags: ["postsList"]
pagination:
  data: collections.posts_en
  size: 1
  alias: posts
  reverse: false
permalink: "/en/posts/page/{{ pagination.pageNumber + 1 }}/"
---
<section class="post-grid">
  {% for post in pagination.items %}
    <article class="post-card">
        {% if post.data.image %}
            <a href="{{ post.url }}">
                <img src="{{ post.data.image }}" alt="Imagem de {{ post.data.title }}" class="post-image">
            </a>
        {% endif %}
        
        <div class="post-content">
        
            <h2>
                <a href="{{ post.url }}">{{ post.data.title }}</a>
            </h2>
            
            <p class="description">{{ post.data.description }}</p>

            <div class="meta">
                <span>{{ post.data.date.toLocaleDateString('en') }}</span> —
                <span>{{ post.data.author }}</span>
            </div>
        </div>
    </article>
  {% endfor %}
</section>

<div class="pagination">
  {% if pagination.href.previous %}
    <a href="{{ pagination.href.previous }}">← Anterior</a>
  {% endif %}

  <span>Página {{ pagination.pageNumber + 1 }} de {{ pagination.pages.length }}</span>

  {% if pagination.href.next %}
    <a href="{{ pagination.href.next }}">Próxima →</a>
  {% endif %}
</div>
