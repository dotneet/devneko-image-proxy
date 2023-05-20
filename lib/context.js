const Fits = ["contain", "cover", "fill", "inside", "outside"];
const Formats = ["jpeg", "png", "gif", "webp", "svg"];

module.exports = class Context {
  constructor({ path, query }, bucket, keyPrefix) {
    const filename = path.replace(/^\//, "");
    this.bucket = bucket;
    this.keyPrefix = keyPrefix || "";
    this.key = this.keyPrefix + filename;
    let params = {};
    if (typeof query.w !== "undefined") {
      params.width = parseInt(query.w);
    }
    if (typeof query.h === "undefined") {
      params.height = params.width;
    } else {
      params.height = parseInt(query.h);
    }

    if (typeof query.prog !== "undefined") {
      params.progressive = true;
    }
    if (typeof query.q !== "undefined") {
      params.quality = parseInt(query.q);
    }
    params.fit = "cover";
    if (typeof query.fit !== "undefined" && Fits.some((i) => i === query.fit)) {
      params.fit = query.fit;
    }
    if (
      typeof query.format !== "undefined" &&
      Formats.some((i) => i === query.format)
    ) {
      params.format = query.format;
    }
    this.params = params;
  }
};
