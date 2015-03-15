"use strict";angular.module("portfolio",["ngAnimate","ngTouch","ngRoute","mgcrea.ngStrap","ui.bootstrap"]).config(["$routeProvider","$compileProvider",function(a,t){a.when("/",{templateUrl:"app/main/main.html"}).when("/about",{templateUrl:"app/about/about.html"}).when("/work",{templateUrl:"app/work/work.html"}).when("/contact",{templateUrl:"app/contact/contact.html"}).when("/viz",{templateUrl:"app/viz/viz.html"}).when("/404",{templateUrl:"404.html"}).otherwise({redirectTo:"/404"}),t.debugInfoEnabled(!1)}]),angular.module("portfolio").controller("VizCtrl",["$scope","$http",function(a,t){var e=function(t){var e=_.map(t.data.fields.slice(2),function(a){return parseInt(a.label)}),r=_.map(t.data.data,function(a){var t={};return t.name=a[1],t.data=_.map(a.slice(2),function(a){return a=a.replace(/[,]/g,""),a=parseFloat(a),isNaN(parseFloat(a))?null:a}),t});r=_.find(r,function(t){return t.name===a.stateFilter}),r&&$("#chartContainer").highcharts({title:{text:"Road Accidents"},xAxis:{categories:e,title:"Year"},yAxis:{title:"Number of Road Accidents"},series:[r]})},r=function(t){var e=_.map(t.data.fields.slice(2),function(a){return parseInt(a.label)}),r=_.map(t.data.data,function(a){var t={};return t.name=a[1],t.data=_.map(a.slice(2),function(a){return a=a.replace(/[,]/g,""),a=parseFloat(a),isNaN(parseFloat(a))?null:a}),t});r=_.find(r,function(t){return t.name===a.stateFilter}),r&&$("#chartContainer").highcharts({title:{text:"Crude Death Rate"},xAxis:{categories:e,title:"Year"},yAxis:{title:"Crude Death Rate"},series:[r]})},s=function(){$("#chartContainer").empty();var a=600,t=$("#chartContainer").width(),e=d3.geo.mercator(),r=void 0,s=d3.geo.path().projection(e),i=d3.select("#chartContainer").append("svg").attr("width",t).attr("height",a),o=d3.select("body").append("div").style("color","#FFFFFF").style("position","absolute").style("z-index","10").style("visibility","hidden"),n=_.template('<div class="panel panel-info"><div class="panel-heading"><%= district %></div><table class="table"><tr><td>Rank</td><td><%= rank %></td></tr><tr><td>Total</td><td><%= total %>%</td></tr><tr><td>Male</td><td><%= male %>%</td></tr><tr><td>Female</td><td><%= female %>%</td></tr></table></div>');d3.json("assets/data/india-district.json",function(l){var d=topojson.feature(l,l.objects["2011_Dist"]);d.features=_.filter(d.features,function(a){return"Tamil Nadu"===a.properties.ST_NM});var p,c,g;e.scale(1).translate([0,0]);var p=s.bounds(d),c=.95/Math.max((p[1][0]-p[0][0])/t,(p[1][1]-p[0][1])/a),g=[(t-c*(p[1][0]+p[0][0]))/2,(a-c*(p[1][1]+p[0][1]))/2];e.scale(c).translate(g);var h=i.append("g").attr("class","boundary");r=h.selectAll("path").data(d.features),r.enter().append("path").attr("class","district").on("mouseover",function(){}).attr("d",s);var m;d3.json("assets/data/literacy-rates.json",function(a,t){var e=Math.floor(_.chain(t).pluck("total").min().value()),s=Math.ceil(_.chain(t).pluck("total").max().value()),i=function(a){return _.find(t,function(t){return t.district===a})};m=d3.scale.linear().domain([e,s]).range(["#EDF8E9","#005A32"]),r.on("mouseover",function(a){return o.html(n(i(a.properties.DISTRICT))),o.style("visibility","visible")}).on("mousemove",function(){return o.style("top",event.pageY-30+"px").style("left",event.pageX+30+"px")}).on("mouseout",function(){return o.style("visibility","hidden")}).attr("fill",function(a){return m(i(a.properties.DISTRICT).total)})}),r.exit().remove()})};a.charts=[{name:"Tamil Nadu Literacy Rates",handler:s},{name:"Crude death rate",url:"assets/data/crude-death-rate-2011.json",handler:r},{name:"Road accidents",url:"assets/data/total-number-of-road-accidents-in-india.json",handler:e}],a.status={isopen:!1},a.states=["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu & Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Tripura","Uttarakhand","Uttar Pradesh","West Bengal","Andaman & Nicobar Islands","Chandigarh","Dadra & Nagar Haveli","Daman & Diu","Delhi","Lakshadweep","Puducherry"],a.stateFilter=a.states[0],a.currentChart=a.charts[0],a.selectState=function(t,e){e.preventDefault(),e.stopPropagation(),a.status.isopen=!a.status.isopen,a.stateFilter=t},a.populateMap=function(e){a.currentChart=e,e.url?t.get(e.url).then(e.handler):e.handler.call()},a.$watch("stateFilter",function(){a.populateMap(a.currentChart)})}]),angular.module("portfolio").controller("MainCtrl",["$scope","$filter",function(a,t){a.works=[{title:"eRevmax",link:"http://www.erevmax.com/",image:"assets/images/eRevMax1.jpg",priority:1},{title:"GoSports Foundation",link:"http://www.gosportsfoundation.in/",image:"assets/images/port04.jpg",priority:2},{title:"Floh Mobile",link:"http://floh.in/",image:"assets/images/port10.jpg",priority:3},{title:"Chennai Bus Routes",link:"https://play.google.com/store/apps/details?id=in.rgksugan.chennaibusroute",image:"assets/images/port02.jpg",priority:4},{title:"Department of CSE, Karunya University",link:"http://www.karunya.edu/cse/",image:"assets/images/port06.jpg",priority:5},{title:"Nonapkin",link:"https://itunes.apple.com/in/app/nonapkin-social-food-network/id699489033?mt=8",image:"assets/images/port07.jpg",priority:6},{title:"Nordlie",link:"https://play.google.com/store/apps/details?id=dk.nordliefood.sales",image:"assets/images/port01.jpg",priority:7},{title:"Approves.it",link:"https://play.google.com/store/apps/details?id=com.boiledbeans.approvesit",image:"assets/images/port05.jpg",priority:8},{title:"Camakshi",link:"https://itunes.apple.com/us/app/camakshi/id702691987?mt=8",image:"assets/images/port09.jpg",priority:9},{title:"CloudFuze",link:"https://itunes.apple.com/us/app/cloudfuze/id694718661?mt=8",image:"assets/images/port08.jpg",priority:10},{title:"LaTeX 4 Android",link:"https://play.google.com/store/apps/details?id=in.rgksugan.latex4android",image:"assets/images/port03.jpg",priority:11}],a.works=t("orderBy")(a.works,"priority"),a.workRows=_.chunk(a.works,3)}]),angular.module("portfolio").run(["$templateCache",function(a){a.put("app/about/about.html",'<div id="ww"><div class="container"><div class="row"><div class="col-lg-8 col-lg-offset-2 centered"><img src="assets/images/rgksugan.png" alt="Sugan" class="profile-pic"><h1>About Sugan</h1><p>I am a developer with a passion to keep myself updated with the cutting edge technologies. I have a master’s degree in Advanced Computer Science from <a href="http://www.le.ac.uk/" target="_blank">University of Leicester, UK.</a></p><p>I started programming in my high school. I have experience developing mobile and web applications. My vast programming experience include Android, iOS, RoR and node.</p></div></div></div></div><div class="container pt"><div class="row mt centered"><div class="col-lg-4"><span class="glyphicon glyphicon-book"></span><h3>Education</h3><p><strong>Master of Science (MS),</strong><br>Advanced Computer Science,<br><a href="http://www.le.ac.uk/" target="_blank">University of Leicester, UK</a></p><p><strong>Bachelor of Engineering (BE),</strong><br>Computer Science Engineering,<br><a href="http://karunya.edu/" target="_blank">Karunya University</a></p></div><div class="col-lg-4"><span class="glyphicon glyphicon-user"></span><h3>Work Experience</h3><p><a href="http://www.sourcebits.com/" target="_blank">Sourcebits,</a><br>Senior Software Developer</p><p><a href="http://www.keepworks.com/" target="_blank">Keepworks Technologies,</a><br>Developer</p><p><a href="http://www.infosys.com/" target="_blank">Infosys Technologies,</a><br>System Engineeer</p></div><div class="col-lg-4"><span class="glyphicon glyphicon-heart-empty"></span><h3>Interests</h3><p><a href="http://kadambai2london.blogspot.in" target="_blank">Travel</a></p><p><a href="https://www.goodreads.com/user/show/4964353-sugan" target="_blank">Reading</a></p></div></div><div class="row mt"><div class="col-lg-6"><h4>Blogs I follow</h4><p><a target="_blank" href="https://news.ycombinator.com/">Hacker News</a><br><a target="_blank" href="http://blog.codinghorror.com/">Coding Horror</a><br><a target="_blank" href="http://www.joelonsoftware.com/">Joel on Software</a><br><a target="_blank" href="http://addyosmani.com/blog/">Addy Osmani</a><br><a target="_blank" href="http://ejohn.org/category/blog/">John Resig</a><br><a target="_blank" href="http://davidwalsh.name/">The David Walsh blog</a></p></div><div class="col-lg-6"><h4>THE SKILLS</h4>HTML5, CSS3, JavaScript<div class="progress"><div class="progress-bar progress-bar-theme" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 90%;"><span class="sr-only">90% Complete</span></div></div>Android<div class="progress"><div class="progress-bar progress-bar-theme" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%;"><span class="sr-only">80% Complete</span></div></div>iOS<div class="progress"><div class="progress-bar progress-bar-theme" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style="width: 75%;"><span class="sr-only">75% Complete</span></div></div>RoR<div class="progress"><div class="progress-bar progress-bar-theme" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style="width: 70%;"><span class="sr-only">70% Complete</span></div></div>Node.js<div class="progress"><div class="progress-bar progress-bar-theme" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"><span class="sr-only">60% Complete</span></div></div></div></div></div>'),a.put("app/contact/contact.html",'<div class="container pt"><div class="row mt"><div class="col-lg-6 col-lg-offset-3 centered"><h3>CONTACT ME</h3><hr></div></div><div class="row mt"><div class="col-lg-8 col-lg-offset-2"><iframe src="https://docs.google.com/forms/d/1wRlwVFh79QHkGH1Yy3uXoFQbP-BoISeWz9K9PxaTtZo/viewform?embedded=true" width="760" height="750" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe></div></div></div>'),a.put("app/main/main.html",'<div id="ww"><div class="container"><div class="row"><div class="col-lg-8 col-lg-offset-2 centered"><img src="assets/images/rgksugan.png" alt="Sugan" class="profile-pic"><h1>Hi, I am Sugan!</h1><p>I am a developer with a passion to keep myself updated with the cutting edge technologies. I have a master’s degree in Advanced Computer Science from <a href="http://www.le.ac.uk/" target="_blank">University of Leicester, UK.</a></p><p>I started programming in my high school. I have experience developing mobile and web applications. My vast programming experience include Angular.js, Ember.js, Backbone.js, Android, iOS, RoR and node.</p></div></div></div></div><div class="container pt"><div class="row mt centered" ng-repeat="workRow in workRows | limitTo:3 track by $index"><div class="col-lg-4" ng-repeat="work in workRow track by $index"><a class="zoom green" href="{{work.link}}" target="_blank"><img class="img-responsive" src="{{work.image}}"></a><p>{{work.title}}</p></div></div></div>'),a.put("app/viz/viz.html",'<div class="container-fluid" ng-controller="VizCtrl"><div class="row mt15"><div class="filters clearfix"><div class="col-md-3"><div class="btn-group btn-block" dropdown="" is-open="status.isopen"><button type="button" class="btn btn-primary dropdown-toggle btn-block" dropdown-toggle="">{{stateFilter}} <span class="caret"></span></button><ul class="dropdown-menu btn-block" role="menu"><li ng-repeat="state in states" ng-click="selectState(state, $event)"><a href="#">{{state}}</a></li></ul></div></div></div></div><div class="row mt15"><div class="col-md-3"><ul class="chartsList"><li ng-repeat="chart in charts track by $index" class="btn btn-default btn-block" ng-click="populateMap(chart)" ng-class="{active: chart.name === currentChart.name}">{{chart.name}}</li></ul></div><div class="col-md-9"><div id="chartContainer"></div></div></div></div>'),a.put("components/footer/footer.html",'<div id="footer"><div class="container"><div class="row"><div class="col-lg-4"><h4>Contact Details</h4><p>Sugan Gopalakrishnan,<br>Bangalore, India.<br>+91-9611772683<br>skype: rgksugan</p></div><div class="col-lg-4"><h4>My Links</h4><p><a href="https://github.com/rgksugan" target="_blank">Github</a><br><a href="https://twitter.com/rgksugan" target="_blank">Twitter</a><br><a href="https://www.facebook.com/rgksugan" target="_blank">Facebook</a></p></div><div class="col-lg-4"><a class="twitter-timeline" data-dnt="true" href="https://twitter.com/rgksugan" data-widget-id="459413824894803968" data-tweet-limit="2">Tweets by @rgksugan</a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?\'http\':\'https\';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script></div></div></div></div>'),a.put("app/work/work.html",'<div class="container pt"><div class="row mt"><div class="col-lg-6 col-lg-offset-3 centered"><h3>MY WORKS</h3><hr><p>Here are few of my works.</p></div></div><div class="row mt centered" ng-repeat="workRow in workRows track by $index"><div class="col-lg-4" ng-repeat="work in workRow track by $index"><a class="zoom green" href="{{work.link}}" target="_blank"><img class="img-responsive" src="{{work.image}}"></a><p>{{work.title}}</p></div></div></div>'),a.put("components/navbar/navbar.html",'<div class="navbar navbar-inverse navbar-static-top"><div class="container"><div class="navbar-header"><button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"><span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span></button> <a class="navbar-brand" href="#/">Sugan</a></div><div class="navbar-collapse collapse"><ul class="nav navbar-nav navbar-right"><li><a href="#/work">Work</a></li><li><a href="#/about">About</a></li><li><a href="#/viz">Visualisations</a></li><li><a href="assets/docs/Sugan_Resume.pdf" target="_blank">Resume</a></li><li><a href="http://rgksugan.wordpress.com/" target="_blank">Blog</a></li><li><a href="#/contact">Contact</a></li></ul></div></div></div>')}]);