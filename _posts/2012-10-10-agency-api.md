---
x: 2000
y: 1000
z: 12000
rotate-y: 180
scale:
notes: With a list of all 1000x agency domains, and knowing each domain has a `/digitalstrategy.json` file, a developer could build a crawler, e.g., to find all APIs opened up as a result of the DGS, or to create a list of all agencies' open strategies, etc.
---

# Agency List API

[https://raw.github.com/gsa/digital-strategy/1/items.json](https://raw.github.com/gsa/digital-strategy/1/items.json)

{% highlight javascript %}

{
   "generator_version":"1.1",
   "generated":"2012-08-13 17:36:18",
   "api_version":"1.0.1",
   "agencies":[
      {
         "name":"Administration for Children and Families",
         "id":"ACF",
         "url":"http:\/\/www.acf.hhs.gov\/"
      },
      {
         "name":"Administration on Aging",
         "id":"AOA",
         "url":"http:\/\/www.aoa.gov\/"
      }
   ]
}

{% endhighlight %}
