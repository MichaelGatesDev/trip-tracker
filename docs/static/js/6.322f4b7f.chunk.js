(this["webpackJsonptrip-tracker"]=this["webpackJsonptrip-tracker"]||[]).push([[6],{48:function(t,n,o){"use strict";o.r(n),o.d(n,"Convert",(function(){return r}));var i=o(31),e=o(32),r=function(){function t(){Object(i.a)(this,t)}return Object(e.a)(t,null,[{key:"toSemanticLocationHistoryAUGUST2016",value:function(t){return n=JSON.parse(t),o=f("SemanticLocationHistoryAUGUST2016"),p(n,o,a);var n,o}},{key:"semanticLocationHistoryAUGUST2016ToJson",value:function(t){return JSON.stringify((n=t,o=f("SemanticLocationHistoryAUGUST2016"),p(n,o,c)),null,2);var n,o}}]),t}();function s(t,n){throw Error("Invalid value ".concat(JSON.stringify(n)," for type ").concat(JSON.stringify(t)))}function a(t){if(void 0===t.jsonToJS){var n={};t.props.forEach((function(t){return n[t.json]={key:t.js,typ:t.typ}})),t.jsonToJS=n}return t.jsonToJS}function c(t){if(void 0===t.jsToJSON){var n={};t.props.forEach((function(t){return n[t.js]={key:t.json,typ:t.typ}})),t.jsToJSON=n}return t.jsToJSON}function p(t,n,o){if("any"===n)return t;if(null===n)return null===t?t:s(n,t);if(!1===n)return s(n,t);for(;"object"===typeof n&&void 0!==n.ref;)n=d[n.ref];return Array.isArray(n)?function(t,n){return-1!==t.indexOf(n)?n:s(t,n)}(n,t):"object"===typeof n?n.hasOwnProperty("unionMembers")?function(t,n){for(var i=t.length,e=0;e<i;e++){var r=t[e];try{return p(n,r,o)}catch(a){}}return s(t,n)}(n.unionMembers,t):n.hasOwnProperty("arrayItems")?function(t,n){return Array.isArray(n)?n.map((function(n){return p(n,t,o)})):s("array",n)}(n.arrayItems,t):n.hasOwnProperty("props")?function(t,n,i){if(null===i||"object"!==typeof i||Array.isArray(i))return s("object",i);var e={};return Object.getOwnPropertyNames(t).forEach((function(n){var r=t[n],s=Object.prototype.hasOwnProperty.call(i,n)?i[n]:void 0;e[r.key]=p(s,r.typ,o)})),Object.getOwnPropertyNames(i).forEach((function(r){Object.prototype.hasOwnProperty.call(t,r)||(e[r]=p(i[r],n,o))})),e}(o(n),n.additional,t):s(n,t):n===Date&&"number"!==typeof t?function(t,n){if(null===n)return null;var o=new Date(n);return isNaN(o.valueOf())?s("Date",n):o}(0,t):function(t,n){return typeof t===typeof n?n:s(t,n)}(n,t)}function y(t){return{arrayItems:t}}function j(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return{unionMembers:n}}function u(t,n){return{props:t,additional:n}}function f(t){return{ref:t}}var l,d={SemanticLocationHistoryAUGUST2016:u([{json:"timelineObjects",js:"timelineObjects",typ:y(f("TimelineObject"))}],!1),TimelineObject:u([{json:"placeVisit",js:"placeVisit",typ:j(void 0,f("PlaceVisit"))},{json:"activitySegment",js:"activitySegment",typ:j(void 0,f("ActivitySegment"))}],!1),ActivitySegment:u([{json:"startLocation",js:"startLocation",typ:f("Location")},{json:"endLocation",js:"endLocation",typ:f("Location")},{json:"duration",js:"duration",typ:f("Duration")},{json:"distance",js:"distance",typ:0},{json:"confidence",js:"confidence",typ:""},{json:"activities",js:"activities",typ:y(f("Activity"))},{json:"waypointPath",js:"waypointPath",typ:f("WaypointPath")},{json:"simplifiedRawPath",js:"simplifiedRawPath",typ:f("SimplifiedRawPath")}],!1),Activity:u([{json:"activityType",js:"activityType",typ:""},{json:"probability",js:"probability",typ:3.14}],!1),Duration:u([{json:"startTimestampMs",js:"startTimestampMs",typ:""},{json:"endTimestampMs",js:"endTimestampMs",typ:""}],!1),Location:u([{json:"latitudeE7",js:"latitudeE7",typ:0},{json:"longitudeE7",js:"longitudeE7",typ:0}],!1),SimplifiedRawPath:u([{json:"points",js:"points",typ:y(f("Point"))}],!1),Point:u([{json:"latE7",js:"latE7",typ:0},{json:"lngE7",js:"lngE7",typ:0},{json:"timestampMs",js:"timestampMs",typ:""},{json:"accuracyMeters",js:"accuracyMeters",typ:0}],!1),WaypointPath:u([{json:"waypoints",js:"waypoints",typ:y((l=0,{props:[],additional:l}))}],!1),PlaceVisit:u([{json:"location",js:"location",typ:f("LocationClass")},{json:"duration",js:"duration",typ:f("Duration")},{json:"centerLatE7",js:"centerLatE7",typ:0},{json:"centerLngE7",js:"centerLngE7",typ:0}],!1),LocationClass:u([{json:"latitudeE7",js:"latitudeE7",typ:0},{json:"longitudeE7",js:"longitudeE7",typ:0},{json:"placeId",js:"placeId",typ:""},{json:"address",js:"address",typ:""},{json:"name",js:"name",typ:""},{json:"sourceInfo",js:"sourceInfo",typ:f("SourceInfo")}],!1),SourceInfo:u([{json:"deviceTag",js:"deviceTag",typ:0}],!1)}}}]);
//# sourceMappingURL=6.322f4b7f.chunk.js.map