---
layout: page
title: Myself
permalink: /myself/
weight: 5
---

  <div class="row justify-content-left align-items-left p-4">
    <div class="col-lg-4 col-md-6 text-center mt-4">
      <div id="container" class="my-2">
        <div id="dummy"></div>
        <div id="element">
          <img src="../assets/ai-profile.jpg" alt="{{ site.title }}" class="circle-image wow animated zoomIn">
        </div>
      </div>
    </div>
  </div>

  {% include about/about.md %}    

  <div class="row">
  {% include about/skills.html title="Clouds" source=site.data.cloud-skills %}
  {% include about/skills.html title="Orchestration" source=site.data.configuration-management-skills %}
  {% include about/skills.html title="Automation" source=site.data.scripting-skills %}
  {% include about/skills.html title="Others" source=site.data.other-skills %}
  </div>

  <div class="row">
  {% include about/timeline.html %}
  </div>
