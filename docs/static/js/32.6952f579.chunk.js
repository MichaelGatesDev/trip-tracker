(this["webpackJsonptrip-tracker"]=this["webpackJsonptrip-tracker"]||[]).push([[32],{74:function(t,n,i){"use strict";i.r(n),i.d(n,"Confidence",(function(){return o})),i.d(n,"ChildVisitPlaceConfidence",(function(){return e})),i.d(n,"PlaceVisitPlaceConfidence",(function(){return s})),i.d(n,"Convert",(function(){return c}));var o,e,s,r=i(31),a=i(32);!function(t){t.High="HIGH",t.Medium="MEDIUM"}(o||(o={})),function(t){t.HighConfidence="HIGH_CONFIDENCE",t.LowConfidence="LOW_CONFIDENCE",t.MediumConfidence="MEDIUM_CONFIDENCE"}(e||(e={})),function(t){t.HighConfidence="HIGH_CONFIDENCE",t.MediumConfidence="MEDIUM_CONFIDENCE",t.UserConfirmed="USER_CONFIRMED"}(s||(s={}));var c=function(){function t(){Object(r.a)(this,t)}return Object(a.a)(t,null,[{key:"toSemanticLocationHistoryOCTOBER2018",value:function(t){return n=JSON.parse(t),i=E("SemanticLocationHistoryOCTOBER2018"),u(n,i,y);var n,i}},{key:"semanticLocationHistoryOCTOBER2018ToJson",value:function(t){return JSON.stringify((n=t,i=E("SemanticLocationHistoryOCTOBER2018"),u(n,i,j)),null,2);var n,i}}]),t}();function p(t,n){throw Error("Invalid value ".concat(JSON.stringify(n)," for type ").concat(JSON.stringify(t)))}function y(t){if(void 0===t.jsonToJS){var n={};t.props.forEach((function(t){return n[t.json]={key:t.js,typ:t.typ}})),t.jsonToJS=n}return t.jsonToJS}function j(t){if(void 0===t.jsToJSON){var n={};t.props.forEach((function(t){return n[t.js]={key:t.json,typ:t.typ}})),t.jsToJSON=n}return t.jsToJSON}function u(t,n,i){if("any"===n)return t;if(null===n)return null===t?t:p(n,t);if(!1===n)return p(n,t);for(;"object"===typeof n&&void 0!==n.ref;)n=C[n.ref];return Array.isArray(n)?function(t,n){return-1!==t.indexOf(n)?n:p(t,n)}(n,t):"object"===typeof n?n.hasOwnProperty("unionMembers")?function(t,n){for(var o=t.length,e=0;e<o;e++){var s=t[e];try{return u(n,s,i)}catch(r){}}return p(t,n)}(n.unionMembers,t):n.hasOwnProperty("arrayItems")?function(t,n){return Array.isArray(n)?n.map((function(n){return u(n,t,i)})):p("array",n)}(n.arrayItems,t):n.hasOwnProperty("props")?function(t,n,o){if(null===o||"object"!==typeof o||Array.isArray(o))return p("object",o);var e={};return Object.getOwnPropertyNames(t).forEach((function(n){var s=t[n],r=Object.prototype.hasOwnProperty.call(o,n)?o[n]:void 0;e[s.key]=u(r,s.typ,i)})),Object.getOwnPropertyNames(o).forEach((function(s){Object.prototype.hasOwnProperty.call(t,s)||(e[s]=u(o[s],n,i))})),e}(i(n),n.additional,t):p(n,t):n===Date&&"number"!==typeof t?function(t,n){if(null===n)return null;var i=new Date(n);return isNaN(i.valueOf())?p("Date",n):i}(0,t):function(t,n){return typeof t===typeof n?n:p(t,n)}(n,t)}function d(t){return{arrayItems:t}}function f(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return{unionMembers:n}}function l(t,n){return{props:t,additional:n}}function E(t){return{ref:t}}var v,C={SemanticLocationHistoryOCTOBER2018:l([{json:"timelineObjects",js:"timelineObjects",typ:d(E("TimelineObject"))}],!1),TimelineObject:l([{json:"activitySegment",js:"activitySegment",typ:f(void 0,E("ActivitySegment"))},{json:"placeVisit",js:"placeVisit",typ:f(void 0,E("PlaceVisit"))}],!1),ActivitySegment:l([{json:"startLocation",js:"startLocation",typ:E("StartLocation")},{json:"endLocation",js:"endLocation",typ:E("Location")},{json:"duration",js:"duration",typ:E("Duration")},{json:"distance",js:"distance",typ:f(void 0,0)},{json:"activityType",js:"activityType",typ:""},{json:"confidence",js:"confidence",typ:E("Confidence")},{json:"activities",js:"activities",typ:d(E("Activity"))},{json:"waypointPath",js:"waypointPath",typ:E("WaypointPath")},{json:"simplifiedRawPath",js:"simplifiedRawPath",typ:f(void 0,E("SimplifiedRawPath"))}],!1),Activity:l([{json:"activityType",js:"activityType",typ:""},{json:"probability",js:"probability",typ:3.14}],!1),Duration:l([{json:"startTimestampMs",js:"startTimestampMs",typ:""},{json:"endTimestampMs",js:"endTimestampMs",typ:""}],!1),Location:l([{json:"latitudeE7",js:"latitudeE7",typ:0},{json:"longitudeE7",js:"longitudeE7",typ:0},{json:"sourceInfo",js:"sourceInfo",typ:f(void 0,E("SourceInfo"))},{json:"placeId",js:"placeId",typ:f(void 0,"")},{json:"address",js:"address",typ:f(void 0,"")},{json:"name",js:"name",typ:f(void 0,"")},{json:"semanticType",js:"semanticType",typ:f(void 0,"")}],!1),SourceInfo:l([{json:"deviceTag",js:"deviceTag",typ:0}],!1),SimplifiedRawPath:l([{json:"points",js:"points",typ:d(E("Point"))}],!1),Point:l([{json:"latE7",js:"latE7",typ:0},{json:"lngE7",js:"lngE7",typ:0},{json:"timestampMs",js:"timestampMs",typ:""},{json:"accuracyMeters",js:"accuracyMeters",typ:0}],!1),StartLocation:l([{json:"latitudeE7",js:"latitudeE7",typ:0},{json:"longitudeE7",js:"longitudeE7",typ:0},{json:"sourceInfo",js:"sourceInfo",typ:E("SourceInfo")}],!1),WaypointPath:l([{json:"waypoints",js:"waypoints",typ:d((v=0,{props:[],additional:v}))}],!1),PlaceVisit:l([{json:"location",js:"location",typ:E("Location")},{json:"duration",js:"duration",typ:E("Duration")},{json:"placeConfidence",js:"placeConfidence",typ:E("PlaceVisitPlaceConfidence")},{json:"childVisits",js:"childVisits",typ:f(void 0,d(E("ChildVisit")))},{json:"centerLatE7",js:"centerLatE7",typ:f(void 0,0)},{json:"centerLngE7",js:"centerLngE7",typ:f(void 0,0)}],!1),ChildVisit:l([{json:"location",js:"location",typ:E("Location")},{json:"duration",js:"duration",typ:f(void 0,E("Duration"))},{json:"placeConfidence",js:"placeConfidence",typ:f(void 0,E("ChildVisitPlaceConfidence"))},{json:"centerLatE7",js:"centerLatE7",typ:f(void 0,0)},{json:"centerLngE7",js:"centerLngE7",typ:f(void 0,0)}],!1),Confidence:["HIGH","MEDIUM"],ChildVisitPlaceConfidence:["HIGH_CONFIDENCE","LOW_CONFIDENCE","MEDIUM_CONFIDENCE"],PlaceVisitPlaceConfidence:["HIGH_CONFIDENCE","MEDIUM_CONFIDENCE","USER_CONFIRMED"]}}}]);
//# sourceMappingURL=32.6952f579.chunk.js.map