"use strict";angular.module("portfolio",["ngAnimate","ngTouch","ngRoute","mgcrea.ngStrap"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"app/main/main.html"}).when("/about",{templateUrl:"app/about/about.html"}).when("/work",{templateUrl:"app/work/work.html"}).when("/contact",{templateUrl:"app/contact/contact.html"}).otherwise({redirectTo:"/"})}]),angular.module("portfolio").controller("MainCtrl",["$scope","$filter",function(a,e){a.works=[{title:"eRevmax",link:"http://www.erevmax.com/",image:"assets/images/eRevMax1.jpg",priority:1},{title:"GoSports Foundation",link:"http://www.gosportsfoundation.in/",image:"assets/images/port04.jpg",priority:2},{title:"Floh Mobile",link:"http://floh.in/",image:"assets/images/port10.jpg",priority:3},{title:"Chennai Bus Routes",link:"https://play.google.com/store/apps/details?id=in.rgksugan.chennaibusroute",image:"assets/images/port02.jpg",priority:4},{title:"Department of CSE, Karunya University",link:"http://www.karunya.edu/cse/",image:"assets/images/port06.jpg",priority:5},{title:"Nonapkin",link:"https://itunes.apple.com/in/app/nonapkin-social-food-network/id699489033?mt=8",image:"assets/images/port07.jpg",priority:6},{title:"Nordlie",link:"https://play.google.com/store/apps/details?id=dk.nordliefood.sales",image:"assets/images/port01.jpg",priority:7},{title:"Approves.it",link:"https://play.google.com/store/apps/details?id=com.boiledbeans.approvesit",image:"assets/images/port05.jpg",priority:8},{title:"Camakshi",link:"https://itunes.apple.com/us/app/camakshi/id702691987?mt=8",image:"assets/images/port09.jpg",priority:9},{title:"CloudFuze",link:"https://itunes.apple.com/us/app/cloudfuze/id694718661?mt=8",image:"assets/images/port08.jpg",priority:10},{title:"LaTeX 4 Android",link:"https://play.google.com/store/apps/details?id=in.rgksugan.latex4android",image:"assets/images/port03.jpg",priority:11}],a.works=e("orderBy")(a.works,"priority"),a.workRows=_.chunk(a.works,3)}]),angular.module("portfolio").run(["$templateCache",function(a){a.put("app/about/about.html",'<div id="ww"><div class="container"><div class="row"><div class="col-lg-8 col-lg-offset-2 centered"><img src="assets/images/rgksugan.png" alt="Sugan" class="profile-pic"><h1>About Sugan</h1><p>I am a developer with a passion to keep myself updated with the cutting edge technologies. I have a master’s degree in Advanced Computer Science from <a href="http://www.le.ac.uk/" target="_blank">University of Leicester, UK.</a></p><p>I started programming in my high school. I have experience developing mobile and web applications. My vast programming experience include Android, iOS, RoR and node.</p></div></div></div></div><div class="container pt"><div class="row mt centered"><div class="col-lg-4"><span class="glyphicon glyphicon-book"></span><h3>Education</h3><p><strong>Master of Science (MS),</strong><br>Advanced Computer Science,<br><a href="http://www.le.ac.uk/" target="_blank">University of Leicester, UK</a></p><p><strong>Bachelor of Engineering (BE),</strong><br>Computer Science Engineering,<br><a href="http://karunya.edu/" target="_blank">Karunya University</a></p></div><div class="col-lg-4"><span class="glyphicon glyphicon-user"></span><h3>Work Experience</h3><p><a href="http://www.sourcebits.com/" target="_blank">Sourcebits,</a><br>Senior Software Developer</p><p><a href="http://www.keepworks.com/" target="_blank">Keepworks Technologies,</a><br>Developer</p><p><a href="http://www.infosys.com/" target="_blank">Infosys Technologies,</a><br>System Engineeer</p></div><div class="col-lg-4"><span class="glyphicon glyphicon-heart-empty"></span><h3>Interests</h3><p><a href="http://kadambai2london.blogspot.in" target="_blank">Travel</a></p><p><a href="https://www.goodreads.com/user/show/4964353-sugan" target="_blank">Reading</a></p></div></div><div class="row mt"><div class="col-lg-6"><h4>Blogs I follow</h4><p><a target="_blank" href="https://news.ycombinator.com/">Hacker News</a><br><a target="_blank" href="http://blog.codinghorror.com/">Coding Horror</a><br><a target="_blank" href="http://www.joelonsoftware.com/">Joel on Software</a><br><a target="_blank" href="http://addyosmani.com/blog/">Addy Osmani</a><br><a target="_blank" href="http://ejohn.org/category/blog/">John Resig</a><br><a target="_blank" href="http://davidwalsh.name/">The David Walsh blog</a></p></div><div class="col-lg-6"><h4>THE SKILLS</h4>HTML5, CSS3, JavaScript<div class="progress"><div class="progress-bar progress-bar-theme" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 90%;"><span class="sr-only">90% Complete</span></div></div>Android<div class="progress"><div class="progress-bar progress-bar-theme" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%;"><span class="sr-only">80% Complete</span></div></div>iOS<div class="progress"><div class="progress-bar progress-bar-theme" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style="width: 75%;"><span class="sr-only">75% Complete</span></div></div>RoR<div class="progress"><div class="progress-bar progress-bar-theme" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style="width: 70%;"><span class="sr-only">70% Complete</span></div></div>Node.js<div class="progress"><div class="progress-bar progress-bar-theme" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"><span class="sr-only">60% Complete</span></div></div></div></div></div>'),a.put("app/contact/contact.html",'<div class="container pt"><div class="row mt"><div class="col-lg-6 col-lg-offset-3 centered"><h3>CONTACT ME</h3><hr></div></div><div class="row mt"><div class="col-lg-8 col-lg-offset-2"><iframe src="https://docs.google.com/forms/d/1wRlwVFh79QHkGH1Yy3uXoFQbP-BoISeWz9K9PxaTtZo/viewform?embedded=true" width="760" height="750" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe></div></div></div>'),a.put("app/main/main.html",'<div id="ww"><div class="container"><div class="row"><div class="col-lg-8 col-lg-offset-2 centered"><img src="assets/images/rgksugan.png" alt="Sugan" class="profile-pic"><h1>Hi, I am Sugan!</h1><p>I am a developer with a passion to keep myself updated with the cutting edge technologies. I have a master’s degree in Advanced Computer Science from <a href="http://www.le.ac.uk/" target="_blank">University of Leicester, UK.</a></p><p>I started programming in my high school. I have experience developing mobile and web applications. My vast programming experience include Angular.js, Ember.js, Backbone.js, Android, iOS, RoR and node.</p></div></div></div></div><div class="container pt"><div class="row mt centered" ng-repeat="workRow in workRows | limitTo:3 track by $index"><div class="col-lg-4" ng-repeat="work in workRow track by $index"><a class="zoom green" href="{{work.link}}" target="_blank"><img class="img-responsive" src="{{work.image}}"></a><p>{{work.title}}</p></div></div></div>'),a.put("app/work/work.html",'<div class="container pt"><div class="row mt"><div class="col-lg-6 col-lg-offset-3 centered"><h3>MY WORKS</h3><hr><p>Here are few of my works.</p></div></div><div class="row mt centered" ng-repeat="workRow in workRows track by $index"><div class="col-lg-4" ng-repeat="work in workRow track by $index"><a class="zoom green" href="{{work.link}}" target="_blank"><img class="img-responsive" src="{{work.image}}"></a><p>{{work.title}}</p></div></div></div>'),a.put("components/footer/footer.html",'<div id="footer"><div class="container"><div class="row"><div class="col-lg-4"><h4>Contact Details</h4><p>Sugan Gopalakrishnan,<br>Bangalore, India.<br>+91-9611772683<br>skype: rgksugan</p></div><div class="col-lg-4"><h4>My Links</h4><p><a href="https://github.com/rgksugan" target="_blank">Github</a><br><a href="https://twitter.com/rgksugan" target="_blank">Twitter</a><br><a href="https://www.facebook.com/rgksugan" target="_blank">Facebook</a></p></div><div class="col-lg-4"><a class="twitter-timeline" data-dnt="true" href="https://twitter.com/rgksugan" data-widget-id="459413824894803968" data-tweet-limit="2">Tweets by @rgksugan</a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?\'http\':\'https\';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script></div></div></div></div>'),a.put("components/navbar/navbar.html",'<div class="navbar navbar-inverse navbar-static-top"><div class="container"><div class="navbar-header"><button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"><span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span></button> <a class="navbar-brand" href="#/">Sugan</a></div><div class="navbar-collapse collapse"><ul class="nav navbar-nav navbar-right"><li><a href="#/work">Work</a></li><li><a href="#/about">About</a></li><li><a href="#/resume" target="_blank">Resume</a></li><li><a href="http://rgksugan.wordpress.com/" target="_blank">Blog</a></li><li><a href="#/contact">Contact</a></li></ul></div></div></div>')}]);