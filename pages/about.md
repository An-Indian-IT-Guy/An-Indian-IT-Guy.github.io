---
layout: page
title: Myself
permalink: /myself/
weight: 1
---

<div class="row justify-content-left align-items-left p-4">
  <div class="col-lg-4 col-md-6 text-center mt-4">

    <!-- Fine Circle Responsive Image -->
    <div id="container" class="my-2">
      <div id="dummy"></div>
      <div id="element">
        <img src="https://media-exp1.licdn.com/dms/image/C5603AQEOUhjnixS9lQ/profile-displayphoto-shrink_800_800/0/1587450431047?e=1674086400&v=beta&t=TpeuAG1A4MsVG2Yg_IbjWt16T0Mf8SPVTvUAg0NjjIA" alt="{{ site.title }}" class="circle-image wow animated zoomIn">
      </div>
    </div>
    
  </div>
</div>

# **About Me**

Hi I am **Rinu Varghese** AKA **{{ site.author.name }}**    :wave:,<br>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

<div class="row">
{% include about/skills.html title="Programming Skills" source=site.data.programming-skills %}
{% include about/skills.html title="Other Skills" source=site.data.other-skills %}
</div>

<div class="row">
{% include about/timeline.html %}
</div>