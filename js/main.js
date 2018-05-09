function drawOneChart(){var a=google.visualization.arrayToDataTable([["Year","One","Two","Three"],["2016",10,60,30],["2017",18,55,27],["2018",25,50,25]]),e=new google.visualization.DataView(a);e.setColumns([0,1,{calc:"stringify",sourceColumn:1,type:"string",role:"annotation"},2,{calc:"stringify",sourceColumn:2,type:"string",role:"annotation"},3,{calc:"stringify",sourceColumn:3,type:"string",role:"annotation"}]);var t={title:"Column chart",annotations:{textStyle:{fontSize:18}},isStacked:"percent",height:600,width:600,bar:{groupWidth:"75%"},legend:{position:"top",maxLines:3},vAxis:{minValue:0,ticks:[0,.5,1]},series:{0:{color:"#2b4989"},1:{color:"#405e9e"},2:{color:"#617fbd"}}},o=new google.visualization.ColumnChart(document.getElementById("columnchart_values"));o.draw(e,t)}function drawTwoChart(){var a=google.visualization.arrayToDataTable([["","",{role:"style"}],["1",24.2,"#2b4989"],["2",13.4,"#2b4989"],["3",10.4,"#2b4989"],["4",4.6,"#2b4989"],["5",4.1,"#2b4989"],["6",4,"#2b4989"],["7",3.3,"#2b4989"],["8",2.1,"#d2d2d2"]]),e=new google.visualization.DataView(a);e.setColumns([0,1,{calc:"stringify",sourceColumn:1,type:"string",role:"annotation"},2]);var t={title:"Bar chart",width:600,height:600,bar:{groupWidth:"60%"},legend:{position:"none"},isStacked:!0,hAxis:{minValue:0,ticks:[]},annotations:{stemColor:"none",textStyle:{color:"#871b47",fontSize:15},alwaysOutside:!0}},o=new google.visualization.BarChart(document.getElementById("barchart_values"));o.draw(e,t)}function drawThreeChart(){var a=google.visualization.arrayToDataTable([["","",{role:"style"}],["",1.5,"#2b4989"],["",-.6,"#2b4989"],["",.2,"#2b4989"],["",-.7,"#2b4989"],["",0,"#2b4989"],["",.9,"#2b4989"],["",1.2,"#2b4989"],["",-.2,"#d2d2d2"]]),e=new google.visualization.DataView(a);e.setColumns([0,1,{calc:"stringify",sourceColumn:1,type:"string",role:"annotation"},2]);var t={title:"Bar chart negative",width:600,height:600,bar:{groupWidth:"60%"},legend:{position:"none"},isStacked:!0,hAxis:{minValue:0,ticks:[]},annotations:{stemColor:"none",textStyle:{color:"#871b47",fontSize:15},alwaysOutside:!0}},o=new google.visualization.BarChart(document.getElementById("barchart_negative"));o.draw(e,t)}google.charts.load("current",{packages:["corechart"]}),google.charts.setOnLoadCallback(drawOneChart),google.charts.setOnLoadCallback(drawTwoChart),google.charts.setOnLoadCallback(drawThreeChart),$(document).ready(function(){$(".slider").slick({infinite:!0,speed:300,autoplay:!0,autoplaySpeed:3e3,fade:!0,cssEase:"linear",prevArrow:'<div class="slider-arrow"><i class="prev-arrow fa fa-angle-left"></i></div>',nextArrow:'<div class="slider-arrow"><i class="next-arrow fa fa-angle-right"></i></div>',focusOnSelect:!0,pauseOnHover:!0})});