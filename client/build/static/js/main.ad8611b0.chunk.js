(this["webpackJsonpcharles-schwab-redesign"]=this["webpackJsonpcharles-schwab-redesign"]||[]).push([[0],{1398:function(t,e,a){},1399:function(t,e,a){},1400:function(t,e,a){},1401:function(t,e,a){},1402:function(t,e,a){},1404:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a.n(n),c=a(202),i=a.n(c),s=(a(591),a(592),a(36)),o=a(57),l=a(59),u=a(58),m=a(37),f=a(576),d=a(577),p=a(102),_=a.n(p),h=a(203),g=function t(e,a){var n=this;Object(s.a)(this,t),this.getValues=function(){return n.values},this.getTimeRange=function(){return n.time_range},this.values=e,this.time_range=a},b=function t(e){var a=this;Object(s.a)(this,t),this.getSector=function(){if(!a.is_empty)return a.raw_data.data.assetProfile.sector},this.getIndustry=function(){if(!a.is_empty)return a.raw_data.data.assetProfile.industry},this.getNumEmployees=function(){if(!a.is_empty)return a.raw_data.data.assetProfile.fullTimeEmployees},this.getWebsite=function(){if(!a.is_empty)return a.raw_data.data.assetProfile.website},this.getCity=function(){if(!a.is_empty)return a.raw_data.data.assetProfile.city},this.getState=function(){if(!a.is_empty)return a.raw_data.data.assetProfile.state},this.getCountry=function(){if(!a.is_empty)return a.raw_data.data.assetProfile.country},this.getBusinessSummary=function(){if(!a.is_empty)return a.raw_data.data.assetProfile.longBusinessSummary},this.getFullName=function(){if(!a.is_empty)return a.raw_data.data.price.longName},this.getInstrumentType=function(){if(!a.is_empty)return a.raw_data.data.price.quoteType},this.getStockSymbol=function(){if(!a.is_empty)return a.raw_data.data.price.symbol},this.is_empty=!e,this.raw_data=e},E=function t(e){var a=this;Object(s.a)(this,t),this.getForecast=function(){if(a.raw_data)return a.raw_data.data.financialData.targetMedianPrice.fmt},this.getForecastLow=function(){if(a.raw_data)return a.raw_data.data.financialData.targetLowPrice.fmt},this.getPurchaseRecommendation=function(){if(a.raw_data)return a.raw_data.data.financialData.recommendationKey},this.getForecastHigh=function(){if(a.raw_data)return a.raw_data.data.financialData.targetHighPrice.fmt},this.getProfitMargin=function(){if(a.raw_data)return a.raw_data.data.financialData.profitMargins.fmt},this.getGrossProfits=function(){if(a.raw_data)return"$".concat(a.raw_data.data.financialData.grossProfits.fmt)},this.getGrossMargin=function(){if(a.raw_data)return a.raw_data.data.financialData.grossMargins.fmt},this.getRevenue=function(){if(a.raw_data)return"$".concat(a.raw_data.data.financialData.totalRevenue.fmt)},this.getRevenueGrowth=function(){if(a.raw_data)return a.raw_data.data.financialData.revenueGrowth.fmt},this.getTotalDebt=function(){if(a.raw_data)return"$".concat(a.raw_data.data.financialData.totalDebt.fmt)},this.getOperatingCashflow=function(){if(a.raw_data)return"$".concat(a.raw_data.data.financialData.operatingCashflow.fmt)},this.getCurrentOpenPrice=function(){if(a.raw_data)return a.raw_data.data.price.regularMarketOpen.fmt},this.getCurrentOpenPriceHigh=function(){if(a.raw_data)return a.raw_data.data.price.regularMarketDayHigh.fmt},this.getCurrentOpenPriceLow=function(){if(a.raw_data)return a.raw_data.data.price.regularMarketDayLow.fmt},this.getPreviousMarketClose=function(){if(a.raw_data)return a.raw_data.data.price.regularMarketPreviousClose.fmt},this.getBeta=function(){if(a.raw_data)return a.raw_data.data.defaultKeyStatistics.beta.fmt},this.getPriceToEarnings=function(){if(a.raw_data)return a.raw_data.data.defaultKeyStatistics.forwardPE.fmt},this.raw_data=e},w=a(204),v=a.n(w),y=function(){var t=Object(h.a)(_.a.mark((function t(e,a){var n,r,c;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("in get chart"),t.next=3,v.a.get("/api/getCharts?symbol=".concat(e,"&range=").concat(a));case 3:return n=t.sent,console.log(n),r=[],c=[],n.data.chart&&n.data.chart.result.length>0&&(r=n.data.chart.result.map((function(t){return t.indicators.quote.reduce((function(t,e){return[].concat(t,e.open)}),[])})).reduce((function(t,e){return[].concat(t,e)}),[]),c=n.data.chart.result.map((function(t){return t.timestamp.reduce((function(t,e){return[].concat(t,e)}),[])})).reduce((function(t,e){return[].concat(t,e)}),[])),t.abrupt("return",new g(r,c));case 8:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),k=function(){var t=Object(h.a)(_.a.mark((function t(e){var a;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.a.get("/api/stockProfile?symbol=".concat(e));case 3:return a=t.sent,t.abrupt("return",new b(a));case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",new b);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),O=function(){var t=Object(h.a)(_.a.mark((function t(e){var a;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.a.get("/api/stockStatistics?symbol=".concat(e));case 3:return a=t.sent,t.abrupt("return",new E(a));case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",new E);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),P={UPDATE_SEARCH_TEXT:"UPDATE_SEARCH_TEXT",UPDATE_CHART_DATA:"UPDATE_CHART_DATA",UPDATE_ALL_STOCK_INFO:"UPDATE_ALL_STOCK_INFO"},N=a(578),C=a.n(N),j=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={temp_search_text:t.props.search_text},t}return Object(o.a)(a,[{key:"render",value:function(){var t=this;return r.a.createElement("div",{style:{textAlign:"left",marginLeft:48,display:"inline-block"}},r.a.createElement("div",{style:{display:"inline-block",position:"relative"}},r.a.createElement("input",{className:C.a.SearchBar,type:"text","data-testid":"search-bar",placeholder:"Search",value:this.state.temp_search_text,onKeyPress:function(e){""!==t.state.temp_search_text&&"Enter"===e.key&&t.props.update(t.state.temp_search_text,t.props.chart_range_used)},onChange:function(e){return t.setState({temp_search_text:e.target.value})}}),r.a.createElement(f.a,{style:{position:"absolute",right:12,top:16,cursor:"pointer"},onClick:function(){t.props.update(t.state.temp_search_text,t.props.chart_range_used)},icon:d.a})))}}]),a}(n.Component),T=Object(m.b)((function(t){return{search_text:t.search_text,chart_range_used:t.range}}),(function(t){return{update:function(e,a){return t(function(t,e){return function(a,n){a({type:P.UPDATE_SEARCH_TEXT,value:t});try{var r=y(t,e),c=k(t),i=O(t);Promise.all([r,i,c]).then((function(t){a({type:P.UPDATE_ALL_STOCK_INFO,chart_data:t[0],stock_statistics:t[1],stock_profile:t[2]})}))}catch(s){console.log(s)}}}(e,a))}}}))(j),A=function(t){return r.a.createElement("div",{style:{textAlign:"left",display:"inline-block",fontSize:24,color:"#243B53"}},r.a.createElement("b",null,"Simple Stock Comparsion"))},D=a(579),S=a.n(D),x=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:S.a.Header},r.a.createElement(A,null),r.a.createElement(T,null))}}]),a}(n.Component),F=a(157),R=a.n(F),B=(a(616),function(t){var e="";return t.symbol&&(e=t.full_name?r.a.createElement(n.Fragment,null,r.a.createElement("h2",{className:"symbol","data-testid":"stock-symbol"},t.symbol),r.a.createElement("h3",{className:"name","data-testid":"stock-fullname"},t.full_name)):r.a.createElement("h2",{"data-testid":"stock-symbol"},t.symbol)),r.a.createElement("div",null,e)}),H=a(580),L=a.n(H),U=a(582),M=a.n(U),W=(a(1398),Object(m.b)(null,(function(t){return{update:function(e){return t((a=e,function(t,e){var n=e().search_text;y(n,a).then((function(e){t({type:P.UPDATE_CHART_DATA,chart_data:e,selected_stock_range:a})}))}));var a}}}))((function(t){var e={backgroundColor:"white"};return t.is_selected&&(e={backgroundColor:"#9FB3C8",boxShadow:"2px 2px 2px #627D98"}),r.a.createElement("button",{style:e,className:"RangeBtn",onClick:function(){return t.update(t.label)}},t.label)}))),G=(a(1399),["1d","5d","6mo","1y"]);var K=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"RangeSelector"},G.map((function(e){return r.a.createElement(W,{key:e,label:e,is_selected:t.props.selected_range===e})})))}}]),a}(n.Component),I=Object(m.b)((function(t){return{selected_range:t.selected_stock_range}}))(K),$=M()(L.a),z=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(I,null),r.a.createElement("div",null,r.a.createElement($,{data:[{y:this.props.open_prices,x:this.props.time_stamps,type:"scatter",model:"lines",marker:{color:"#3EBD93"}}],layout:{title:"Open Price"}})))}}]),a}(n.Component),X=Object(m.b)((function(t){return console.log("in performance plot"),console.log(t),{open_prices:t.chart_data.getValues(),time_stamps:t.chart_data.getTimeRange()}}))(z),J=a(51),V=(a(201),function(t){return r.a.createElement("div",{className:"price-indicator-container"},r.a.createElement("div",{className:"content-container"},t.indicatorContent),r.a.createElement("div",{className:"name-container"},t.indicatorName))}),q=function(t){return r.a.createElement(n.Fragment,null,r.a.createElement("h3",{className:"main-content one-value-container"},t.value))},Q=function(t){return r.a.createElement(n.Fragment,null,r.a.createElement("h3",{className:"main-content"},t.content),r.a.createElement("div",{className:"small-cotent"},t.subcontent))},Y=function(t){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"small-content"},"H ".concat(t.high)),r.a.createElement("h3",{className:"main-content"},t.middle),r.a.createElement("div",{className:"small-content"},"L ".concat(t.low)))},Z=(a(1400),Object(m.b)((function(t){return Object(J.a)(Object(J.a)({},t),{},{open_low:t.stock_statistics.getCurrentOpenPriceLow(),open_high:t.stock_statistics.getCurrentOpenPriceHigh(),open:t.stock_statistics.getCurrentOpenPrice(),forecast_low:t.stock_statistics.getForecastLow(),forecast_high:t.stock_statistics.getForecastHigh(),forecast:t.stock_statistics.getForecast(),beta:t.stock_statistics.getBeta(),forwardPE:t.stock_statistics.getPriceToEarnings()})}))((function(t){var e="";t.beta<1?e="Low":t.beta>=1&&t.beta<=1.25?e="Avg":t.beta>1.25&&(e="High");var a=r.a.createElement(Y,{low:t.open_low,middle:t.open,high:t.open_high}),n=r.a.createElement(Y,{low:t.forecast_low,middle:t.forecast,high:t.forecast_high}),c=r.a.createElement(Q,{content:e,subcontent:"Beta: ".concat(t.beta)}),i=r.a.createElement(q,{value:t.forwardPE});return r.a.createElement("div",{className:"pic-container"},r.a.createElement(V,{indicatorContent:a,indicatorName:"Open"}),r.a.createElement(V,{indicatorContent:n,indicatorName:"Forecast"}),r.a.createElement(V,{indicatorContent:i,indicatorName:"P/E"}),r.a.createElement(V,{indicatorContent:c,indicatorName:"Volatility"}))}))),tt=(a(1401),function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("h2",{className:"company-title"},"Company Performance"),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",{className:"table-row"},r.a.createElement("td",{className:"attr-title"},"Gross Profit"),r.a.createElement("td",{className:"stat"},this.props.gross_profit)),r.a.createElement("tr",{className:"table-row"},r.a.createElement("td",{className:"attr-title"},"Profit Margin"),r.a.createElement("td",{className:"stat"},this.props.profit_margin)),r.a.createElement("tr",{className:"table-row"},r.a.createElement("td",{className:"attr-title"},"Revenue"),r.a.createElement("td",{className:"stat"},this.props.revenue)),r.a.createElement("tr",{className:"table-row"},r.a.createElement("td",{className:"attr-title"},"Revenue Growth"),r.a.createElement("td",{className:"stat"},this.props.revenue_growth)),r.a.createElement("tr",{className:"table-row"},r.a.createElement("td",{className:"attr-title"},"Total Debt"),r.a.createElement("td",{className:"stat"},this.props.total_debt)),r.a.createElement("tr",{className:"table-row"},r.a.createElement("td",{className:"attr-title"},"Operating Cash Flow"),r.a.createElement("td",{className:"stat"},this.props.operating_cash_flow)))))}}]),a}(n.Component)),et=Object(m.b)((function(t){return{profit_margin:t.stock_statistics.getProfitMargin(),revenue:t.stock_statistics.getRevenue(),revenue_growth:t.stock_statistics.getRevenueGrowth(),gross_profit:t.stock_statistics.getGrossProfits(),total_debt:t.stock_statistics.getTotalDebt(),operating_cash_flow:t.stock_statistics.getOperatingCashflow()}}))(tt),at=function(t){return r.a.createElement("div",{style:{display:"inline-block",borderRadius:14,fontSize:16,color:"#186FAF",backgroundColor:"#DCEEFB",padding:"8px 32px"}},t.value)},nt=function(t){return r.a.createElement("div",{style:{display:"inline-block",marginLeft:24,borderRadius:14,fontSize:16,color:"#51279B",backgroundColor:"#EAE2F8",padding:"8px 32px"}},t.value)},rt=function(t){return r.a.createElement("div",{style:{color:"#829AB1",fontSize:24,textAlign:"center",marginBottom:32}},r.a.createElement("div",null,t.label),r.a.createElement("div",null,r.a.createElement("b",null,t.value)))},ct=function(t){return r.a.createElement("div",null,r.a.createElement(rt,{label:"# Full Time Employees",value:t.num_employees}),r.a.createElement(rt,{label:"Location",value:t.location}),r.a.createElement(rt,{label:"Website",value:t.website}))},it=(a(1402),function(t){return r.a.createElement("div",{className:"aboutContainer"},r.a.createElement("h2",{className:"aboutTitle"},"About Company"),r.a.createElement("div",{className:"descriptionAndDetails"},r.a.createElement("div",{className:"stock-description"},r.a.createElement("div",{style:{marginBottom:24}},r.a.createElement(at,{value:t.sector}),r.a.createElement(nt,{value:t.industry})),t.description),r.a.createElement("div",{className:"details"},r.a.createElement(ct,{num_employees:t.num_employees,location:t.location,website:t.website}))))}),st=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:R.a.PerformancePage},r.a.createElement("span",{className:R.a.pageWidth},r.a.createElement(n.Fragment,null,r.a.createElement(B,{symbol:this.props.symbol,full_name:this.props.fullname}),r.a.createElement("div",{className:R.a.topContainer},r.a.createElement("div",{style:{float:"left",width:"54%"}},r.a.createElement(X,null)),r.a.createElement("div",{style:{float:"left",width:"46%"}},r.a.createElement(Z,null))),r.a.createElement("div",{style:{width:"50%",marginLeft:"auto",marginRight:"auto",marginTop:72,marginBottom:72}},r.a.createElement(et,null)),r.a.createElement("div",{className:R.a.fullWidth},r.a.createElement(it,{description:this.props.description,num_employees:this.props.num_employees,location:this.props.location,website:this.props.website,sector:this.props.sector,industry:this.props.industry})))))}}]),a}(n.Component),ot=Object(m.b)((function(t){return{fullname:t.stock_profile.getFullName(),symbol:t.stock_profile.getStockSymbol(),description:t.stock_profile.getBusinessSummary(),num_employees:t.stock_profile.getNumEmployees(),location:"".concat(t.stock_profile.getCity(),", ").concat(t.stock_profile.getState()),website:t.stock_profile.getWebsite(),sector:t.stock_profile.getSector(),industry:t.stock_profile.getIndustry()}}))(st),lt=Object(m.b)((function(t){return{search_text:t.search_text}}))((function(t){return r.a.createElement("div",{className:"App"},r.a.createElement(x,null),r.a.createElement(ot,null))})),ut=a(156);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var mt={search_text:"",chart_data:new g,stock_statistics:new E,stock_profile:new b,selected_stock_range:"1d"},ft=a(583),dt=Object(ut.c)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:mt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case P.UPDATE_SEARCH_TEXT:return Object(J.a)(Object(J.a)({},t),{},{search_text:e.value});case P.UPDATE_SHOW_SEARCH_BAR:return Object(J.a)(Object(J.a)({},t),{},{show_comparison_seach_bar:e.value});case P.UPDATE_STOCK_RANGE:return Object(J.a)(Object(J.a)({},t),{},{selected_stock_range:e.value});case P.UPDATE_CHART_DATA:return Object(J.a)(Object(J.a)({},t),{},{chart_data:e.chart_data,selected_stock_range:e.selected_stock_range});case P.UPDATE_ALL_STOCK_INFO:return Object(J.a)(Object(J.a)({},t),{},{chart_data:e.chart_data,stock_statistics:e.stock_statistics,stock_profile:e.stock_profile});default:return t}}),Object(ut.a)(ft.a));i.a.render(r.a.createElement(m.a,{store:dt},r.a.createElement(lt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},157:function(t,e,a){t.exports={PerformancePage:"PerformancePage_PerformancePage__JvkPv",pageWidth:"PerformancePage_pageWidth__mgrwf",topContainer:"PerformancePage_topContainer__1-F-g",fullWidth:"PerformancePage_fullWidth__2Q25t"}},201:function(t,e,a){},578:function(t,e,a){t.exports={SearchBtn:"SearchBar_SearchBtn__3sT-0"}},579:function(t,e,a){t.exports={Header:"Header_Header__2C_Ub"}},586:function(t,e,a){t.exports=a(1404)},591:function(t,e,a){},592:function(t,e,a){},616:function(t,e,a){},891:function(t,e){}},[[586,1,2]]]);
//# sourceMappingURL=main.ad8611b0.chunk.js.map