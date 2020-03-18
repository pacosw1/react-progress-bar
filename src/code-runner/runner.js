//maintain original log func

//overwrite console.log to catch logs

const OPTIONS = {
  presets: [
    "react",
    ["es2015", { modules: false }],
    "es2016",
    "es2017",
    "stage-0",
    "stage-1",
    "stage-2",
    "stage-3"
  ],
  plugins: ["transform-es2015-modules-commonjs"]
};

// export default function preprocess(str) {
//   const { code } = Babel.transform(str, OPTIONS);

//   return code;
// }
export const runCode = input => {
  var result = {
    type: "output",
    data: []
  };

  const renderObject = obj => {
    let keys = Object.keys(obj);
    let res = "{\n";
    for (let i in keys) {
      let key = keys[i];
      let val = obj[key];
      res += `${keys[i]}: ${val}`;
      if (i != keys.length - 1) res += ", ";
    }
    res += "\n}";
    return res;
  };

  //catch ouput
  console.log = (...args) => {
    args.forEach(arg => {
      if (typeof arg == "object") {
        //array
        if (arg.length != undefined) {
          for (let i = 0; i < arg.length; i++) {
            if (typeof arg[i] == "object") arg[i] = " " + renderObject(arg[i]);
            else arg[i] = " " + arg[i];
          }
          arg = `[ ${arg.toString()} ]`;
        } else arg = renderObject(arg);
      } else result.data.push(arg.toString());
    });
  };

  let run = new Function(input);

  try {
    run();
    result.type = "output";
    return result;
  } catch (err) {
    result.type = "error";
    result.data.push({
      text: err.toString()
    });
  } finally {
    return result;
  }
};
