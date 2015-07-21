// Author @patriciogv - 2015
// http://patriciogonzalezvivo.com

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float random (in float x) { return fract(sin(x)*1e4); }
float random (in vec2 _st) { return fract(sin(dot(_st.xy, vec2(12.9898,78.233)))* 43758.5453123);}

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    st.x *= u_resolution.x/u_resolution.y;
    vec3 color = vec3(0.0);

    st *= vec2(100.0,50.);

    vec2 ivec = floor(st);  // integer
    vec2 fvec = fract(st);  // fraction
    
    vec2 vel = floor(vec2(u_time*10.)); // time
    vel *= vec2(-1.,0.); // direction

    // vel *= (step(1., mod(ivec.y,2.0))-0.5)*2.; // Oposite directions
    vel *= random(ivec.y); // random speed
    
    // Move
    ivec += floor(vel);
    // Assign a random value base on the integer coord
    color = vec3(step(.8,random(ivec)));

    gl_FragColor = vec4(color,1.0);
}