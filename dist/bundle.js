(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var element = document.getElementById("greeting");
var oReq = new XMLHttpRequest();
oReq.open("GET", "./asset/cloudy_wave.lhso", true);
oReq.responseType = "arraybuffer";
oReq.onload = function (oEvent) {
    var arrayBuffer = oReq.response;
    if (!arrayBuffer) {
        return;
    }
    if (!element) {
        return;
    }
    var byteArray = new Uint8Array(arrayBuffer);
    element.innerHTML = Array(byteArray).join(", ");
    // @TODO: unserialize this into ZoneOp, which, in turn, unserialize
    // the Streams they may contain.
};
oReq.send(null);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDWUEsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUVwRCxJQUFNLElBQUksR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO0FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLDBCQUEwQixFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ25ELElBQUksQ0FBQyxZQUFZLEdBQUcsYUFBYSxDQUFDO0FBRWxDLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxNQUFNO0lBQzVCLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDbEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQUMsTUFBTSxDQUFBO0lBQUMsQ0FBQztJQUM1QixFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFBQyxNQUFNLENBQUE7SUFBQyxDQUFDO0lBQ3hCLElBQU0sU0FBUyxHQUFHLElBQUksVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzlDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVoRCxtRUFBbUU7SUFDbkUsZ0NBQWdDO0FBQ2xDLENBQUMsQ0FBQztBQUVGLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHsgQ2xvdWREZXNjcmlwdG9yIH0gZnJvbSBcIi4vZGVzY3JpcHRvci9DbG91ZERlc2NyaXB0b3JfcGJcIjtcbmltcG9ydCB7IENvbnN0YW50RGVzY3JpcHRvciB9IGZyb20gJy4vZGVzY3JpcHRvci9Db25zdGFudERlc2NyaXB0b3JfcGInO1xuaW1wb3J0IHsgT3BTdGFja0Rlc2NyaXB0b3IgfSBmcm9tICcuL2Rlc2NyaXB0b3IvT3BTdGFja0Rlc2NyaXB0b3JfcGInO1xuaW1wb3J0IHsgUHVsc2VEZXNjcmlwdG9yIH0gZnJvbSAnLi9kZXNjcmlwdG9yL1B1bHNlRGVzY3JpcHRvcl9wYic7XG5pbXBvcnQgeyBTaW5lU2luZ2xlRGVzY3JpcHRvciB9IGZyb20gJy4vZGVzY3JpcHRvci9TaW5lU2luZ2xlRGVzY3JpcHRvcl9wYic7XG5pbXBvcnQgeyBTaW5lRG91YmxlRGVzY3JpcHRvciB9IGZyb20gJy4vZGVzY3JpcHRvci9TaW5lRG91YmxlRGVzY3JpcHRvcl9wYic7XG5pbXBvcnQgeyBab25lRGVzY3JpcHRvciB9IGZyb20gJy4vZGVzY3JpcHRvci9ab25lRGVzY3JpcHRvcl9wYic7XG5pbXBvcnQgeyBab25lT3BEZXNjcmlwdG9yIH0gZnJvbSAnLi9kZXNjcmlwdG9yL1pvbmVPcERlc2NyaXB0b3JfcGInO1xuXG5pbXBvcnQgeyBPcFN0YWNrIH0gZnJvbSAnLi90aGVfc3RhY2svT3BTdGFjayc7XG5cblxuY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3JlZXRpbmdcIik7XG5cbmNvbnN0IG9SZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbm9SZXEub3BlbihcIkdFVFwiLCBcIi4vYXNzZXQvY2xvdWR5X3dhdmUubGhzb1wiLCB0cnVlKTtcbm9SZXEucmVzcG9uc2VUeXBlID0gXCJhcnJheWJ1ZmZlclwiO1xuXG5vUmVxLm9ubG9hZCA9IGZ1bmN0aW9uIChvRXZlbnQpIHtcbiAgY29uc3QgYXJyYXlCdWZmZXIgPSBvUmVxLnJlc3BvbnNlO1xuICBpZiAoIWFycmF5QnVmZmVyKSB7IHJldHVybiB9XG4gIGlmICghZWxlbWVudCkgeyByZXR1cm4gfVxuICBjb25zdCBieXRlQXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcik7XG4gIGVsZW1lbnQuaW5uZXJIVE1MID0gQXJyYXkoYnl0ZUFycmF5KS5qb2luKFwiLCBcIik7XG5cbiAgLy8gQFRPRE86IHVuc2VyaWFsaXplIHRoaXMgaW50byBab25lT3AsIHdoaWNoLCBpbiB0dXJuLCB1bnNlcmlhbGl6ZVxuICAvLyB0aGUgU3RyZWFtcyB0aGV5IG1heSBjb250YWluLlxufTtcblxub1JlcS5zZW5kKG51bGwpOyJdfQ==
