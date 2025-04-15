---
title: "Início"
layout: layout.njk
---

<section class="post-grid">
  {% for post in collections.posts %}
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
          <span>{{ post.data.date.toLocaleDateString('pt-BR') }}</span> —
          <span>{{ post.data.author }}</span>
        </div>
      </div>
    </article>
  {% endfor %}
</section>
