// To parse this data:
//
//   import { Convert, SemanticLocationHistoryNOVEMBER2016 } from "./file";
//
//   const semanticLocationHistoryNOVEMBER2016 = Convert.toSemanticLocationHistoryNOVEMBER2016(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface SemanticLocationHistoryNOVEMBER2016 {
    timelineObjects: TimelineObject[];
}

export interface TimelineObject {
    placeVisit: PlaceVisit;
}

export interface PlaceVisit {
    location:        Location;
    duration:        Duration;
    placeConfidence: string;
    centerLatE7:     number;
    centerLngE7:     number;
}

export interface Duration {
    startTimestampMs: string;
    endTimestampMs:   string;
}

export interface Location {
    latitudeE7:  number;
    longitudeE7: number;
    placeId:     string;
    address:     string;
    name:        string;
    sourceInfo:  SourceInfo;
}

export interface SourceInfo {
    deviceTag: number;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toSemanticLocationHistoryNOVEMBER2016(json: string): SemanticLocationHistoryNOVEMBER2016 {
        return cast(JSON.parse(json), r("SemanticLocationHistoryNOVEMBER2016"));
    }

    public static semanticLocationHistoryNOVEMBER2016ToJson(value: SemanticLocationHistoryNOVEMBER2016): string {
        return JSON.stringify(uncast(value, r("SemanticLocationHistoryNOVEMBER2016")), null, 2);
    }
}

function invalidValue(typ: any, val: any): never {
    throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`);
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        var map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        var map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        var l = typs.length;
        for (var i = 0; i < l; i++) {
            var typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases, val);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue("array", val);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue("Date", val);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue("object", val);
        }
        var result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val);
    }
    if (typ === false) return invalidValue(typ, val);
    while (typeof typ === "object" && typ.ref !== undefined) {
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
    return { arrayItems: typ };
}


function o(props: any[], additional: any) {
    return { props, additional };
}


function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "SemanticLocationHistoryNOVEMBER2016": o([
        { json: "timelineObjects", js: "timelineObjects", typ: a(r("TimelineObject")) },
    ], false),
    "TimelineObject": o([
        { json: "placeVisit", js: "placeVisit", typ: r("PlaceVisit") },
    ], false),
    "PlaceVisit": o([
        { json: "location", js: "location", typ: r("Location") },
        { json: "duration", js: "duration", typ: r("Duration") },
        { json: "placeConfidence", js: "placeConfidence", typ: "" },
        { json: "centerLatE7", js: "centerLatE7", typ: 0 },
        { json: "centerLngE7", js: "centerLngE7", typ: 0 },
    ], false),
    "Duration": o([
        { json: "startTimestampMs", js: "startTimestampMs", typ: "" },
        { json: "endTimestampMs", js: "endTimestampMs", typ: "" },
    ], false),
    "Location": o([
        { json: "latitudeE7", js: "latitudeE7", typ: 0 },
        { json: "longitudeE7", js: "longitudeE7", typ: 0 },
        { json: "placeId", js: "placeId", typ: "" },
        { json: "address", js: "address", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "sourceInfo", js: "sourceInfo", typ: r("SourceInfo") },
    ], false),
    "SourceInfo": o([
        { json: "deviceTag", js: "deviceTag", typ: 0 },
    ], false),
};
