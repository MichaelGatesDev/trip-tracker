(this["webpackJsonptrip-tracker"]=this["webpackJsonptrip-tracker"]||[]).push([[39],{81:function(t,n,o){"use strict";o.r(n),o.d(n,"Confidence",(function(){return i})),o.d(n,"PlaceConfidence",(function(){return e})),o.d(n,"Convert",(function(){return r}));var i,e,s=o(32),a=o(33);!function(t){t.High="HIGH",t.Low="LOW",t.Medium="MEDIUM"}(i||(i={})),function(t){t.HighConfidence="HIGH_CONFIDENCE",t.LowConfidence="LOW_CONFIDENCE",t.MediumConfidence="MEDIUM_CONFIDENCE"}(e||(e={}));var r=function(){function t(){Object(s.a)(this,t)}return Object(a.a)(t,null,[{key:"toSemanticLocationHistoryJULY2019",value:function(t){return n=JSON.parse(t),o=l("SemanticLocationHistoryJULY2019"),y(n,o,p);var n,o}},{key:"semanticLocationHistoryJULY2019ToJson",value:function(t){return JSON.stringify((n=t,o=l("SemanticLocationHistoryJULY2019"),y(n,o,j)),null,2);var n,o}}]),t}();function c(t,n){throw Error("Invalid value ".concat(JSON.stringify(n)," for type ").concat(JSON.stringify(t)))}function p(t){if(void 0===t.jsonToJS){var n={};t.props.forEach((function(t){return n[t.json]={key:t.js,typ:t.typ}})),t.jsonToJS=n}return t.jsonToJS}function j(t){if(void 0===t.jsToJSON){var n={};t.props.forEach((function(t){return n[t.js]={key:t.json,typ:t.typ}})),t.jsToJSON=n}return t.jsToJSON}function y(t,n,o){if("any"===n)return t;if(null===n)return null===t?t:c(n,t);if(!1===n)return c(n,t);for(;"object"===typeof n&&void 0!==n.ref;)n=m[n.ref];return Array.isArray(n)?function(t,n){return-1!==t.indexOf(n)?n:c(t,n)}(n,t):"object"===typeof n?n.hasOwnProperty("unionMembers")?function(t,n){for(var i=t.length,e=0;e<i;e++){var s=t[e];try{return y(n,s,o)}catch(a){}}return c(t,n)}(n.unionMembers,t):n.hasOwnProperty("arrayItems")?function(t,n){return Array.isArray(n)?n.map((function(n){return y(n,t,o)})):c("array",n)}(n.arrayItems,t):n.hasOwnProperty("props")?function(t,n,i){if(null===i||"object"!==typeof i||Array.isArray(i))return c("object",i);var e={};return Object.getOwnPropertyNames(t).forEach((function(n){var s=t[n],a=Object.prototype.hasOwnProperty.call(i,n)?i[n]:void 0;e[s.key]=y(a,s.typ,o)})),Object.getOwnPropertyNames(i).forEach((function(s){Object.prototype.hasOwnProperty.call(t,s)||(e[s]=y(i[s],n,o))})),e}(o(n),n.additional,t):c(n,t):n===Date&&"number"!==typeof t?function(t,n){if(null===n)return null;var o=new Date(n);return isNaN(o.valueOf())?c("Date",n):o}(0,t):function(t,n){return typeof t===typeof n?n:c(t,n)}(n,t)}function u(t){return{arrayItems:t}}function d(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return{unionMembers:n}}function f(t,n){return{props:t,additional:n}}function l(t){return{ref:t}}var v,m={SemanticLocationHistoryJULY2019:f([{json:"timelineObjects",js:"timelineObjects",typ:u(l("TimelineObject"))}],!1),TimelineObject:f([{json:"activitySegment",js:"activitySegment",typ:d(void 0,l("ActivitySegment"))},{json:"placeVisit",js:"placeVisit",typ:d(void 0,l("PlaceVisit"))}],!1),ActivitySegment:f([{json:"startLocation",js:"startLocation",typ:l("Location")},{json:"endLocation",js:"endLocation",typ:l("EndLocation")},{json:"duration",js:"duration",typ:l("Duration")},{json:"distance",js:"distance",typ:d(void 0,0)},{json:"activityType",js:"activityType",typ:""},{json:"confidence",js:"confidence",typ:l("Confidence")},{json:"activities",js:"activities",typ:u(l("Activity"))},{json:"waypointPath",js:"waypointPath",typ:d(void 0,l("WaypointPath"))},{json:"simplifiedRawPath",js:"simplifiedRawPath",typ:d(void 0,l("SimplifiedRawPath"))},{json:"transitPath",js:"transitPath",typ:d(void 0,l("TransitPath"))}],!1),Activity:f([{json:"activityType",js:"activityType",typ:""},{json:"probability",js:"probability",typ:3.14}],!1),Duration:f([{json:"startTimestampMs",js:"startTimestampMs",typ:""},{json:"endTimestampMs",js:"endTimestampMs",typ:""}],!1),EndLocation:f([{json:"latitudeE7",js:"latitudeE7",typ:0},{json:"longitudeE7",js:"longitudeE7",typ:0},{json:"sourceInfo",js:"sourceInfo",typ:d(void 0,l("SourceInfo"))}],!1),SourceInfo:f([{json:"deviceTag",js:"deviceTag",typ:0}],!1),SimplifiedRawPath:f([{json:"points",js:"points",typ:u(l("Point"))}],!1),Point:f([{json:"latE7",js:"latE7",typ:0},{json:"lngE7",js:"lngE7",typ:0},{json:"timestampMs",js:"timestampMs",typ:""},{json:"accuracyMeters",js:"accuracyMeters",typ:0}],!1),Location:f([{json:"latitudeE7",js:"latitudeE7",typ:0},{json:"longitudeE7",js:"longitudeE7",typ:0},{json:"sourceInfo",js:"sourceInfo",typ:d(void 0,l("SourceInfo"))},{json:"placeId",js:"placeId",typ:d(void 0,"")},{json:"address",js:"address",typ:d(void 0,"")},{json:"name",js:"name",typ:d(void 0,"")},{json:"semanticType",js:"semanticType",typ:d(void 0,"")}],!1),TransitPath:f([{json:"transitStops",js:"transitStops",typ:u(l("TransitStop"))},{json:"name",js:"name",typ:""},{json:"hexRgbColor",js:"hexRgbColor",typ:""}],!1),TransitStop:f([{json:"latitudeE7",js:"latitudeE7",typ:0},{json:"longitudeE7",js:"longitudeE7",typ:0},{json:"placeId",js:"placeId",typ:""},{json:"name",js:"name",typ:""}],!1),WaypointPath:f([{json:"waypoints",js:"waypoints",typ:u((v=0,{props:[],additional:v}))}],!1),PlaceVisit:f([{json:"location",js:"location",typ:l("Location")},{json:"duration",js:"duration",typ:l("Duration")},{json:"placeConfidence",js:"placeConfidence",typ:l("PlaceConfidence")},{json:"childVisits",js:"childVisits",typ:d(void 0,u(l("ChildVisit")))},{json:"centerLatE7",js:"centerLatE7",typ:0},{json:"centerLngE7",js:"centerLngE7",typ:0}],!1),ChildVisit:f([{json:"location",js:"location",typ:l("Location")},{json:"duration",js:"duration",typ:l("Duration")},{json:"placeConfidence",js:"placeConfidence",typ:l("PlaceConfidence")},{json:"centerLatE7",js:"centerLatE7",typ:0},{json:"centerLngE7",js:"centerLngE7",typ:0}],!1),Confidence:["HIGH","LOW","MEDIUM"],PlaceConfidence:["HIGH_CONFIDENCE","LOW_CONFIDENCE","MEDIUM_CONFIDENCE"]}}}]);
//# sourceMappingURL=39.358041fe.chunk.js.map