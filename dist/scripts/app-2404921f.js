"use strict";angular.module("portfolio",["ngAnimate","ngTouch","ngRoute","mgcrea.ngStrap","ui.bootstrap"]).config(["$routeProvider","$compileProvider",function(t,e){t.when("/",{templateUrl:"app/main/main.html"}).when("/about",{templateUrl:"app/about/about.html"}).when("/work",{templateUrl:"app/work/work.html"}).when("/contact",{templateUrl:"app/contact/contact.html"}).when("/lab",{templateUrl:"app/lab/lab.html"}).when("/lab/visualiations/tamil-nadu-literacy-rates",{templateUrl:"app/viz/tn-literacy-rates.html"}).when("/lab/visualiations/connected-books",{templateUrl:"app/viz/connected-books.html"}).when("/lab/visualiations/farm",{templateUrl:"app/viz/farm.html"}).when("/readings",{templateUrl:"app/readings/readings.html"}).when("/404",{templateUrl:"404.html"}).otherwise({redirectTo:"/404"}),e.debugInfoEnabled(!1)}]),angular.module("portfolio").controller("TNLiteracyCtrl",["$scope","$http",function(){var t=function(){$("#chartContainer").empty();var t=600,e=$("#chartContainer").width(),a=d3.geo.mercator(),r=void 0,i=d3.geo.path().projection(a),o=d3.select("#chartContainer").append("svg").attr("width",e).attr("height",t),s=d3.select("body").append("div").style("color","#FFFFFF").style("position","absolute").style("z-index","10").style("visibility","hidden"),n=_.template('<div class="panel panel-info"><div class="panel-heading"><%= district %></div><table class="table"><tr><td>Rank</td><td><%= rank %></td></tr><tr><td>Total</td><td><%= total %>%</td></tr><tr><td>Male</td><td><%= male %>%</td></tr><tr><td>Female</td><td><%= female %>%</td></tr></table></div>');d3.json("assets/data/india-district.json",function(l){var d=topojson.feature(l,l.objects["2011_Dist"]);d.features=_.filter(d.features,function(t){return"Tamil Nadu"===t.properties.ST_NM});var c,p,u;a.scale(1).translate([0,0]);var c=i.bounds(d),p=.95/Math.max((c[1][0]-c[0][0])/e,(c[1][1]-c[0][1])/t),u=[(e-p*(c[1][0]+c[0][0]))/2,(t-p*(c[1][1]+c[0][1]))/2];a.scale(p).translate(u);var v=o.append("g").attr("class","boundary");r=v.selectAll("path").data(d.features),r.enter().append("path").attr("d",i).attr("class",function(t){return"district "+t.properties.DISTRICT}),_.each(d.features,function(t){o.append("text").attr("x",function(){return i.centroid(t)[0]}).attr("y",function(){return i.centroid(t)[1]}).text(function(){return t.properties.DISTRICT})});var g;d3.json("assets/data/literacy-rates.json",function(t,e){var a=Math.floor(_.chain(e).pluck("total").min().value()),i=Math.ceil(_.chain(e).pluck("total").max().value()),o=function(t){return _.find(e,function(e){return e.district===t})};g=d3.scale.linear().domain([a,i]).range(["#EDF8E9","#005A32"]),r.on("mouseover",function(t){return s.html(n(o(t.properties.DISTRICT))),s.style("visibility","visible")}).on("mousemove",function(){return s.style("top",event.pageY-30+"px").style("left",event.pageX+30+"px")}).on("mouseout",function(){return s.style("visibility","hidden")}).attr("fill",function(t){return g(o(t.properties.DISTRICT).total)})}),r.exit().remove()})};t()}]),angular.module("portfolio").controller("MotorVehiclesCtrl",["$scope","$http",function(){}]),angular.module("portfolio").controller("FarmCtrl",["$scope","$http",function(){var t=function(){$("#chartContainer").empty();var t=600,e=$("#chartContainer").width(),a=d3.geo.mercator(),r=void 0,i=d3.geo.path().projection(a),o=d3.select("#chartContainer").append("svg").attr("width",e).attr("height",t),s=d3.select("body").append("div").style("color","#FFFFFF").style("position","absolute").style("z-index","10").style("visibility","hidden"),n=_.template('<div class="panel panel-info"><div class="panel-heading"><%= district %></div><table class="table"><tr><td>Rank</td><td><%= rank %></td></tr><tr><td>Total</td><td><%= total %>%</td></tr><tr><td>Male</td><td><%= male %>%</td></tr><tr><td>Female</td><td><%= female %>%</td></tr></table></div>');d3.json("assets/data/india-district.json",function(l){var d=topojson.feature(l,l.objects["2011_Dist"]);d.features=_.filter(d.features,function(t){return"Tamil Nadu"===t.properties.ST_NM});var c,p,u;a.scale(1).translate([0,0]);var c=i.bounds(d),p=.95/Math.max((c[1][0]-c[0][0])/e,(c[1][1]-c[0][1])/t),u=[(e-p*(c[1][0]+c[0][0]))/2,(t-p*(c[1][1]+c[0][1]))/2];a.scale(p).translate(u);var v=o.append("g").attr("class","boundary");r=v.selectAll("path").data(d.features),r.enter().append("path").attr("d",i).attr("class",function(t){return"district "+t.properties.DISTRICT}),_.each(d.features,function(t){o.append("text").attr("x",function(){return i.centroid(t)[0]}).attr("y",function(){return i.centroid(t)[1]}).text(function(){return t.properties.DISTRICT})});var g;d3.json("assets/data/literacy-rates.json",function(t,e){var a=Math.floor(_.chain(e).pluck("total").min().value()),i=Math.ceil(_.chain(e).pluck("total").max().value()),o=function(t){return _.find(e,function(e){return e.district===t})};g=d3.scale.linear().domain([a,i]).range(["#EDF8E9","#005A32"]),r.on("mouseover",function(t){return s.html(n(o(t.properties.DISTRICT))),s.style("visibility","visible")}).on("mousemove",function(){return s.style("top",event.pageY-30+"px").style("left",event.pageX+30+"px")}).on("mouseout",function(){return s.style("visibility","hidden")}).attr("fill",function(t){return g(o(t.properties.DISTRICT).total)})}),r.exit().remove()})};t()}]),angular.module("portfolio").controller("ConnectedBooksCtrl",["$scope","$http",function(){function t(t){d3.event.active||n.alphaTarget(.3).restart(),t.fx=t.x,t.fy=t.y}function e(t){t.fx=d3.event.x,t.fy=d3.event.y}function a(t){d3.event.active||n.alphaTarget(0),t.fx=null,t.fy=null}var r=d3.select("#connectedBooks"),i=+r.attr("width"),o=+r.attr("height"),s=d3.scaleOrdinal(d3.schemeCategory20),n=d3.forceSimulation().force("link",d3.forceLink().id(function(t){return t.id})).force("charge",d3.forceManyBody()).force("center",d3.forceCenter(i/2,o/2));d3.json("assets/data/books.json",function(i,o){function l(){d.attr("x1",function(t){return t.source.x}).attr("y1",function(t){return t.source.y}).attr("x2",function(t){return t.target.x}).attr("y2",function(t){return t.target.y}),c.attr("cx",function(t){return t.x}).attr("cy",function(t){return t.y})}if(i)throw i;var d=r.append("g").attr("class","links").selectAll("line").data(o.links).enter().append("line").attr("stroke-width",function(t){return Math.sqrt(t.value)}),c=r.append("g").attr("class","nodes").selectAll("circle").data(o.nodes).enter().append("circle").attr("r",5).attr("fill",function(t){return s(t.group)}).call(d3.drag().on("start",t).on("drag",e).on("end",a));c.append("title").text(function(t){return t.id}),n.nodes(o.nodes).on("tick",l),n.force("link").links(o.links)})}]),angular.module("portfolio").controller("MainCtrl",["$scope","$filter",function(t,e){t.works=[{title:"eRevmax",link:"http://www.erevmax.com/",image:"assets/images/eRevMax1.jpg",priority:1},{title:"GoSports Foundation",link:"http://www.gosportsfoundation.in/",image:"assets/images/port04.jpg",priority:2},{title:"Floh Mobile",link:"http://floh.in/",image:"assets/images/port10.jpg",priority:3},{title:"Department of CSE, Karunya University",link:"http://www.karunya.edu/cse/",image:"assets/images/port06.jpg",priority:5},{title:"Nonapkin",link:"https://itunes.apple.com/in/app/nonapkin-social-food-network/id699489033?mt=8",image:"assets/images/port07.jpg",priority:6},{title:"Nordlie",link:"https://play.google.com/store/apps/details?id=dk.nordliefood.sales",image:"assets/images/port01.jpg",priority:7},{title:"Approves.it",link:"https://play.google.com/store/apps/details?id=com.boiledbeans.approvesit",image:"assets/images/port05.jpg",priority:8},{title:"Camakshi",link:"https://itunes.apple.com/us/app/camakshi/id702691987?mt=8",image:"assets/images/port09.jpg",priority:9},{title:"CloudFuze",link:"https://itunes.apple.com/us/app/cloudfuze/id694718661?mt=8",image:"assets/images/port08.jpg",priority:10}],t.works=e("orderBy")(t.works,"priority"),t.workRows=_.chunk(t.works,3)}]),angular.module("portfolio").run(["$templateCache",function(t){t.put("app/about/about.html",'<div id="ww"><div class="container"><div class="row"><div class="col-lg-8 col-lg-offset-2 centered"><img src="assets/images/rgksugan.png" alt="Sugan" class="profile-pic"><h1>About Sugan</h1><p>I am a developer with a passion to keep myself updated with the cutting edge technologies. I have a master’s degree in Advanced Computer Science from <a href="http://www.le.ac.uk/" target="_blank">University of Leicester, UK.</a></p><p>I started programming in my high school. I have experience developing mobile and web applications. My vast programming experience include Android, iOS, RoR and node.</p></div></div></div></div><div class="container pt"><div class="row mt centered"><div class="col-lg-4"><span class="glyphicon glyphicon-book"></span><h3>Education</h3><p><strong>Master of Science (MS),</strong><br>Advanced Computer Science,<br><a href="http://www.le.ac.uk/" target="_blank">University of Leicester, UK</a></p><p><strong>Bachelor of Engineering (BE),</strong><br>Computer Science Engineering,<br><a href="http://karunya.edu/" target="_blank">Karunya University</a></p></div><div class="col-lg-4"><span class="glyphicon glyphicon-user"></span><h3>Work Experience</h3><p><a href="http://www.sourcebits.com/" target="_blank">Sourcebits,</a><br>Senior Software Developer</p><p><a href="http://www.keepworks.com/" target="_blank">Keepworks Technologies,</a><br>Developer</p><p><a href="http://www.infosys.com/" target="_blank">Infosys Technologies,</a><br>System Engineeer</p></div><div class="col-lg-4"><span class="glyphicon glyphicon-heart-empty"></span><h3>Interests</h3><p><a href="http://kadambai2london.blogspot.in" target="_blank">Travel</a></p><p><a href="https://www.goodreads.com/user/show/4964353-sugan" target="_blank">Reading</a></p></div></div><div class="row mt"><div class="col-lg-6"><h4>Blogs I follow</h4><p><a target="_blank" href="https://news.ycombinator.com/">Hacker News</a><br><a target="_blank" href="http://blog.codinghorror.com/">Coding Horror</a><br><a target="_blank" href="http://www.joelonsoftware.com/">Joel on Software</a><br><a target="_blank" href="http://addyosmani.com/blog/">Addy Osmani</a><br><a target="_blank" href="http://ejohn.org/category/blog/">John Resig</a><br><a target="_blank" href="http://davidwalsh.name/">The David Walsh blog</a></p></div><div class="col-lg-6"><h4>THE SKILLS</h4>HTML5, CSS3, JavaScript<div class="progress"><div class="progress-bar progress-bar-theme" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 90%;"><span class="sr-only">90% Complete</span></div></div>Android<div class="progress"><div class="progress-bar progress-bar-theme" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%;"><span class="sr-only">80% Complete</span></div></div>iOS<div class="progress"><div class="progress-bar progress-bar-theme" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style="width: 75%;"><span class="sr-only">75% Complete</span></div></div>RoR<div class="progress"><div class="progress-bar progress-bar-theme" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style="width: 70%;"><span class="sr-only">70% Complete</span></div></div>Node.js<div class="progress"><div class="progress-bar progress-bar-theme" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"><span class="sr-only">60% Complete</span></div></div></div></div></div>'),t.put("app/contact/contact.html",'<div class="container pt"><div class="row mt"><div class="col-lg-6 col-lg-offset-3 centered"><h3>CONTACT ME</h3><hr></div></div><div class="row mt"><div class="col-lg-8 col-lg-offset-2"><iframe src="https://docs.google.com/forms/d/1wRlwVFh79QHkGH1Yy3uXoFQbP-BoISeWz9K9PxaTtZo/viewform?embedded=true" width="760" height="750" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe></div></div></div>'),t.put("app/lab/lab.html",'<div class="container"><div class="row"><h2></h2><div class="panel panel-default"><div class="panel-heading">Visualisations</div><div class="panel-body"><ul><li><a href="#/lab/visualiations/tamil-nadu-literacy-rates">Literacy Rates - Tamil Nadu</a></li><li><a href="#/lab/visualiations/farm">Farm - Map</a></li></ul></div></div><div class="panel panel-default"><div class="panel-heading">Chrome Apps</div><div class="panel-body"><ul><li><a href="https://chrome.google.com/webstore/detail/thehinduias/hnmhbccejffinlkbdlallfdmdeajhmgb" target="_blank">The Hindu IAS</a></li></ul></div></div><div class="panel panel-default"><div class="panel-heading">Android Apps</div><div class="panel-body"><ul><li><a href="https://play.google.com/store/apps/details?id=in.rgksugan.chennaibusroutes" target="_blank">Chennai Bus Routes</a></li><li><a href="https://play.google.com/store/apps/details?id=in.rgksugan.latex4android" target="_blank">LaTeX for Android Beta</a></li></ul></div></div></div></div>'),t.put("app/main/main.html",'<div id="ww"><div class="container"><div class="row"><div class="col-lg-8 col-lg-offset-2 centered"><img src="assets/images/rgksugan.png" alt="Sugan" class="profile-pic"><h1>Hi, I am Sugan!</h1><p>I am a developer with a passion to keep myself updated with the cutting edge technologies. I have a master’s degree in Advanced Computer Science from <a href="http://www.le.ac.uk/" target="_blank">University of Leicester, UK.</a></p><p>I started programming in my high school. I have experience developing mobile and web applications. My vast programming experience include Angular.js, Ember.js, Backbone.js, Android, iOS, RoR and node.</p></div></div></div></div><div class="container pt"><div class="row mt centered" ng-repeat="workRow in workRows | limitTo:3 track by $index"><div class="col-lg-4" ng-repeat="work in workRow track by $index"><a class="zoom green" href="{{work.link}}" target="_blank"><img class="img-responsive" src="{{work.image}}"></a><p>{{work.title}}</p></div></div></div>'),t.put("app/readings/readings.html","Hello"),t.put("app/viz/accidents.html",'<div class="container-fluid" ng-controller="AccidentsCtrl"><div id="chartContainer"></div></div>'),t.put("app/viz/connected-books.html",'<div class="container-fluid" ng-controller="ConnectedBooksCtrl"><svg id="connectedBooks" width="960" height="600"></svg></div>'),t.put("app/viz/farm.html",'<div class="container-fluid" ng-controller="FarmCtrl"><div id="farmContainer"></div></div>'),t.put("app/viz/tn-literacy-rates.html",'<div class="container-fluid" ng-controller="TNLiteracyCtrl"><div id="chartContainer"></div></div>'),t.put("app/viz/tn-registered-motor-vehicles.html",'<div class="container-fluid" ng-controller="AccidentsCtrl"><div class="row"><div class="col-sm-3"><form><div class="form-group"><label for="category">Category</label><select ng-model="vehicles.category" id="category"><option value="commercial">Commercial</option><option value="non-commercial">Non-Commercial</option></select></div><div class="form-group"><label for="exampleInputPassword1">Password</label> <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></div><div class="form-group"><label for="exampleInputFile">File input</label> <input type="file" id="exampleInputFile"><p class="help-block">Example block-level help text here.</p></div><div class="checkbox"><label><input type="checkbox"> Check me out</label></div><button type="submit" class="btn btn-default">Submit</button></form></div><div class="col-sm-9"><div id="chartContainer"></div></div></div></div>'),t.put("app/work/work.html",'<div class="container pt"><div class="row mt"><div class="col-lg-6 col-lg-offset-3 centered"><h3>MY WORKS</h3><hr><p>Here are few of my works.</p></div></div><div class="row mt centered" ng-repeat="workRow in workRows track by $index"><div class="col-lg-4" ng-repeat="work in workRow track by $index"><a class="zoom green" href="{{work.link}}" target="_blank"><img class="img-responsive" src="{{work.image}}"></a><p>{{work.title}}</p></div></div></div>'),t.put("components/footer/footer.html",'<div id="footer"><div class="container"><div class="row"><div class="col-lg-4"><h4>Contact Details</h4><p>Sugan Gopalakrishnan,<br>Bangalore, India.<br>+91-9611772683<br>skype: rgksugan</p></div><div class="col-lg-4"><h4>My Links</h4><p><a href="https://github.com/rgksugan" target="_blank">Github</a><br><a href="https://twitter.com/rgksugan" target="_blank">Twitter</a><br><a href="https://www.facebook.com/rgksugan" target="_blank">Facebook</a></p></div><div class="col-lg-4"><a class="twitter-timeline" data-dnt="true" href="https://twitter.com/rgksugan" data-widget-id="459413824894803968" data-tweet-limit="2">Tweets by @rgksugan</a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?\'http\':\'https\';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script></div></div></div></div>'),t.put("components/navbar/navbar.html",'<div class="navbar navbar-inverse navbar-static-top"><div class="container"><div class="navbar-header"><button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"><span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span></button> <a class="navbar-brand" href="#/">Sugan</a></div><div class="navbar-collapse collapse"><ul class="nav navbar-nav navbar-right"><li><a href="#/work">Work</a></li><li><a href="#/about">About</a></li><li><a href="#/lab">Lab</a></li><li><a href="assets/docs/Sugan_Resume.pdf" target="_blank">Resume</a></li><li><a href="http://rgksugan.wordpress.com/" target="_blank">Blog</a></li><li><a href="#/contact">Contact</a></li></ul></div></div></div>')}]);