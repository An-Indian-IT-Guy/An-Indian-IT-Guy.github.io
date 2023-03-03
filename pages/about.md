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

Hi I am **Rinu Varghese** a.k.a **{{ site.author.name }}** :wave:,<br><br>
  I am a [Microsoft Certified Azure Solutions Architect](https://www.credly.com/badges/b25632ce-268d-4712-b0dd-cf1743008d70) with more than ten years of experience in the IT industry. I also have knowledge of Infrastructure as Code. Apart from work I enjoy taking long motorcycle rides on my [Hero Xpulse 200 4V](https://www.heromotocorp.com/en-in/motorcycles/performance/xpulse-200-4v.html), a lite Offroader turned tourer. I also enjoy making food to satisfy my own cravings for [homemade dishes](./recipes.html).<br><br>

<div class="row">
{% include about/skills.html title="Clouds" source=site.data.cloud-skills %}
{% include about/skills.html title="Orchestration" source=site.data.configuration-management-skills %}
{% include about/skills.html title="Automation" source=site.data.scripting-skills %}
{% include about/skills.html title="Others" source=site.data.other-skills %}

</div>

<div class="row">
{% include about/timeline.html %}
</div>