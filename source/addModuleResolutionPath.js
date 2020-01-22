"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.addModuleResolutionPath = addModuleResolutionPath;exports.addModuleResolutionPathMultiple = addModuleResolutionPathMultiple;var _require$main;const path = require('path'),
moduleSystem = require('module');
const jsEntrypointPath = path.dirname(
((_require$main = require.main) === null || _require$main === void 0 ? void 0 : _require$main.filename) || process.cwd());







function addModuleResolutionPath({
  nodeModulePath })
{





  process.env.NODE_PATH = `${process.env.NODE_PATH || ''}${path.delimiter}${nodeModulePath}`;
  process.env.NODE_PATH = process.env.NODE_PATH.replace(new RegExp(`/(^\\${path.delimiter}+)/`), '');


  moduleSystem._initPaths();
}


function addModuleResolutionPathMultiple({ pathArray = [] }) {
  for (let nodeModulePath of pathArray) {
    addModuleResolutionPath({ nodeModulePath });
  }


  let nodePathArray = process.env.NODE_PATH.split(path.delimiter);
  let nodePathFormatted = '\t'.concat(nodePathArray.join('\n\t'));


}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hZGRNb2R1bGVSZXNvbHV0aW9uUGF0aC5qcyJdLCJuYW1lcyI6WyJwYXRoIiwicmVxdWlyZSIsIm1vZHVsZVN5c3RlbSIsImpzRW50cnlwb2ludFBhdGgiLCJkaXJuYW1lIiwibWFpbiIsImZpbGVuYW1lIiwicHJvY2VzcyIsImN3ZCIsImFkZE1vZHVsZVJlc29sdXRpb25QYXRoIiwibm9kZU1vZHVsZVBhdGgiLCJlbnYiLCJOT0RFX1BBVEgiLCJkZWxpbWl0ZXIiLCJyZXBsYWNlIiwiUmVnRXhwIiwiX2luaXRQYXRocyIsImFkZE1vZHVsZVJlc29sdXRpb25QYXRoTXVsdGlwbGUiLCJwYXRoQXJyYXkiLCJub2RlUGF0aEFycmF5Iiwic3BsaXQiLCJub2RlUGF0aEZvcm1hdHRlZCIsImNvbmNhdCIsImpvaW4iXSwibWFwcGluZ3MiOiJpT0FBQSxNQUFNQSxJQUFJLEdBQUdDLE9BQU8sQ0FBQyxNQUFELENBQXBCO0FBQ0VDLFlBQVksR0FBR0QsT0FBTyxDQUFDLFFBQUQsQ0FEeEI7QUFFQSxNQUFNRSxnQkFBZ0IsR0FBR0gsSUFBSSxDQUFDSSxPQUFMO0FBQ3ZCLGtCQUFBSCxPQUFPLENBQUNJLElBQVIsZ0VBQWNDLFFBQWQsS0FBMEJDLE9BQU8sQ0FBQ0MsR0FBUixFQURILENBQXpCOzs7Ozs7OztBQVNPLFNBQVNDLHVCQUFULENBQWlDO0FBQ3RDQyxFQUFBQSxjQURzQyxFQUFqQztBQUVKOzs7Ozs7QUFNREgsRUFBQUEsT0FBTyxDQUFDSSxHQUFSLENBQVlDLFNBQVosR0FBeUIsR0FBRUwsT0FBTyxDQUFDSSxHQUFSLENBQVlDLFNBQVosSUFBeUIsRUFBRyxHQUFFWixJQUFJLENBQUNhLFNBQVUsR0FBRUgsY0FBZSxFQUF6RjtBQUNBSCxFQUFBQSxPQUFPLENBQUNJLEdBQVIsQ0FBWUMsU0FBWixHQUF3QkwsT0FBTyxDQUFDSSxHQUFSLENBQVlDLFNBQVosQ0FBc0JFLE9BQXRCLENBQThCLElBQUlDLE1BQUosQ0FBWSxRQUFPZixJQUFJLENBQUNhLFNBQVUsS0FBbEMsQ0FBOUIsRUFBdUUsRUFBdkUsQ0FBeEI7OztBQUdBWCxFQUFBQSxZQUFZLENBQUNjLFVBQWI7QUFDRDs7O0FBR00sU0FBU0MsK0JBQVQsQ0FBeUMsRUFBRUMsU0FBUyxHQUFHLEVBQWQsRUFBekMsRUFBNkQ7QUFDbEUsT0FBSyxJQUFJUixjQUFULElBQTJCUSxTQUEzQixFQUFzQztBQUNwQ1QsSUFBQUEsdUJBQXVCLENBQUMsRUFBRUMsY0FBRixFQUFELENBQXZCO0FBQ0Q7OztBQUdELE1BQUlTLGFBQWEsR0FBR1osT0FBTyxDQUFDSSxHQUFSLENBQVlDLFNBQVosQ0FBc0JRLEtBQXRCLENBQTRCcEIsSUFBSSxDQUFDYSxTQUFqQyxDQUFwQjtBQUNBLE1BQUlRLGlCQUFpQixHQUFHLEtBQUtDLE1BQUwsQ0FBWUgsYUFBYSxDQUFDSSxJQUFkLENBQW1CLE1BQW5CLENBQVosQ0FBeEI7OztBQUdEIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKSxcclxuICBtb2R1bGVTeXN0ZW0gPSByZXF1aXJlKCdtb2R1bGUnKVxyXG5jb25zdCBqc0VudHJ5cG9pbnRQYXRoID0gcGF0aC5kaXJuYW1lKFxyXG4gIHJlcXVpcmUubWFpbj8uZmlsZW5hbWUgfHwgcHJvY2Vzcy5jd2QoKSAvKkluIGNhc2UgcnVuIHRocm91Z2ggY29tbWFuZGxpbmUgLSBlLmcuICdub2RlIC0tZXZhbCBcInJlcXVpcmUocHJvY2Vzcy5jd2QoKSkoKVwiJyB3aGVyZSBubyBtYWluIGVudHJ5IG1vZHVsZSBpcyByZWdpc3RlcmVkICovLFxyXG4pIC8vIGVudHJ5cG9pbnQgZGlyZWN0b3J5IHBhdGggKGN1cnJlbnQgbm9kZWpzIHByb2Nlc3Mgcm9vdCBwYXRoKVxyXG5cclxuLy8g8J+TpiBBZGQgTm9kZWpzIHJlcXVpcmUgbW9kdWxlIHJlc29sdXRpb24gcGF0aCB0byBwcm9jZXNzLmVudi5OT0RFX1BBVEhcclxuLy8gYWRkIHJvb3QgcGF0aCAoYXBwIGJhc2UgcGF0aCkgdG8gdGhlIHJlc29sdmVkIG1vZHVsZSBwYXRocy5cclxuLy8gRGVmaW5lIHNlcnZlciBiYXNlIHBhdGguIEhhY2tpc2ggd2F5IHRvIG1ha2Ugc3VyZSB0aGUgcGF0aCBpcyBhbHdheXMgY29uc2lzdGVudC4gQmFzZSBwYXRoIGluIE5vZGVqcyBpcyB3aGVyZSB0aGUgY2xvc2VzdCBwYXJlbnQgbm9kZV9tb2R1bGVzIGlzIGxvY2F0ZWQgdG8gdGhlIGluaXRpYXRlZCBqcyBzY3JpcHQuXHJcbi8vICcke2FwcFJvb3RQYXRofScgYWxsb3dzIGZvciBmb2xkZXJzL21vZHVsZXMgaW5zaWRlIHRoZSBtYWluIGZvbGRlciB0byBiZSBjYWxsZWQgd2l0aCBvdXQgdXNpbmcgcmVsYXRpdmUgcGF0aHMuXHJcbi8vICcke2FwcFJvb3RQYXRofS9ub2RlX21vZHVsZXMnIGFsbG93cyBmb3IgbW9kdWxlcyBmcm9tIHVwcGVyIGhlcmFyY2hpZXMgdG8gY2FsbCBtb2R1bGVzIGZyb20gc2libGluZyBmb2xkZXJzLiBlLmcuIHNvdXJjZS94IGNhbGxzIHNvdXJjZS95L25vZGVfbW9kdWxlcy9tb2R1bGVcclxuZXhwb3J0IGZ1bmN0aW9uIGFkZE1vZHVsZVJlc29sdXRpb25QYXRoKHtcclxuICBub2RlTW9kdWxlUGF0aCwgLy8gcGF0aCB0byBhZGQgdG8gdGhlIG5vZGUgbW9kdWxlIHJlc29sdXRpb24gcGF0aHNcclxufSkge1xyXG4gIC8qIEFkZGluZyB0aGUgZGVmYXVsdCBub2RlX21vZHVsZXMgcGF0aCBpc24ndCBuZWNlc3NhcnkgYW55bW9yZSwgYXMgdGhlIGN1cnJlbnQgYmVoYXZpb3IgKGF0IGxlYXN0IHRocm91Z2ggYmFiZWwpIGlzIHRvIGxvYWQgTk9ERV9QQVRIIGFzIGFkZGl0aW9uYWwgcmVzb2x1dGlvbiBwYXRocywgYW5kIG5vdCBvdmVycmlkaW5nLlxyXG4gICAgYWRkIG5vZGVqcyBkZWZhdWx0IHBhdGggdG8gTk9ERV9QQVRILCBpLmUuIFwibm9kZV9tb2R1bGVzXCIgICovXHJcbiAgLy8gaWYoIXByb2Nlc3MuZW52Lk5PREVfUEFUSCkgcHJvY2Vzcy5lbnYuTk9ERV9QQVRIID0gYCR7anNFbnRyeXBvaW50UGF0aH0vbm9kZV9tb2R1bGVzYFxyXG5cclxuICAvLyBhZGQgcGF0aHMgdG8gdGhlIE5PREVfUEFUSCBzdHJpbmdcclxuICBwcm9jZXNzLmVudi5OT0RFX1BBVEggPSBgJHtwcm9jZXNzLmVudi5OT0RFX1BBVEggfHwgJyd9JHtwYXRoLmRlbGltaXRlcn0ke25vZGVNb2R1bGVQYXRofWBcclxuICBwcm9jZXNzLmVudi5OT0RFX1BBVEggPSBwcm9jZXNzLmVudi5OT0RFX1BBVEgucmVwbGFjZShuZXcgUmVnRXhwKGAvKF5cXFxcJHtwYXRoLmRlbGltaXRlcn0rKS9gKSwgJycpIC8vIFwiOjxwYXRoPjo8cGF0aD5cIiAtPiBcIjxwYXRoPjo8cGF0aD5cIiByZW1vdmUgZW1wdHkgc2VjdGlvbiBpbiB0aGUgYmVnaW5uaW5nIGluIGNhc2UgTk9ERV9QQVRIIHdhcyB1bmRlZmluZWQuXHJcblxyXG4gIC8vIExvYWQgbmV3IE5PREVfUEFUSCB2YXJpYWJsZVxyXG4gIG1vZHVsZVN5c3RlbS5faW5pdFBhdGhzKCkgLy8gcmVmbGVjdCBjaGFuZ2Ugb24gdGhlIHJ1bm5pbmcgYXBwLlxyXG59XHJcblxyXG4vLyBpbnRlcmZhY2UgZm9yIG11bHRpcGxlIHBhdGhzXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRNb2R1bGVSZXNvbHV0aW9uUGF0aE11bHRpcGxlKHsgcGF0aEFycmF5ID0gW10gfSkge1xyXG4gIGZvciAobGV0IG5vZGVNb2R1bGVQYXRoIG9mIHBhdGhBcnJheSkge1xyXG4gICAgYWRkTW9kdWxlUmVzb2x1dGlvblBhdGgoeyBub2RlTW9kdWxlUGF0aCB9KVxyXG4gIH1cclxuXHJcbiAgLy8gTG9nIHBhdGhzXHJcbiAgbGV0IG5vZGVQYXRoQXJyYXkgPSBwcm9jZXNzLmVudi5OT0RFX1BBVEguc3BsaXQocGF0aC5kZWxpbWl0ZXIpIC8vIGRlZmF1bHQgTk9ERV9QQVRIIGlzIGNvbXBvc2VkIG9mIHBhdGhzIHNlcGFyYXRlZCBieSBzZW1pY29sb24gKG9uZSBjb21wbGV0ZSBzdHJpbmcgb2YgcGF0aHMpLlxyXG4gIGxldCBub2RlUGF0aEZvcm1hdHRlZCA9ICdcXHQnLmNvbmNhdChub2RlUGF0aEFycmF5LmpvaW4oJ1xcblxcdCcpKSAvLyBhZGQgYSB0YWIgYW5kIGxpbmVicmVhayBiZXR3ZWVuIHBhdGhzXHJcbiAgLy8gY29uc29sZS5ncm91cChgXFx4MWJbMm1cXHgxYlszbSVzIFxcbiVzXFx4MWJbMG1gLCBg4oCiIE5vZGVcXCdzIG1vZHVsZSByZXNvbHV0aW9uIHBhdGhzOmAsIGAke25vZGVQYXRoRm9ybWF0dGVkfWApXHJcbiAgLy8gY29uc29sZS5ncm91cEVuZCgpXHJcbn1cclxuXHJcbi8vIGxvZ2dpbmcgd3JhcHBlclxyXG4vLyBUT0RPOiBMb2cgaW5zaWRlIHByb3h5LlxyXG4iXX0=