import React from 'react';
import { NavLink } from 'react-router-dom';

var slideimg1 = require('./../../images/main-slider/slider5/slide1.jpg');
var slideimg2 = require('./../../images/main-slider/slider5/slide2.jpg');

class Slider5 extends React.Component {
    componentDidMount() {
        function loadScript(src) {

            return new Promise(function (resolve, reject) {
                var script = document.createElement('script');
                script.src = src;
                script.addEventListener('load', function () {
                    resolve();
                });
                script.addEventListener('error', function (e) {
                    reject(e);
                });
                document.body.appendChild(script);
                document.body.removeChild(script);
            })
        };

        loadScript('./assets/js/rev-script-5.js');
        loadScript('./assets/plugins/revolution-addons/beforeafter/js/revolution.addon.beforeafter.min.js');
    };
    render() {
        return (
            <>
                <div id="rev_slider_346_1_wrapper" className="rev_slider_wrapper fullscreen-container" data-alias="beforeafterslider1" data-source="gallery" style={{ background: '#252525', padding: 0 }}>
                
                <div id="rev_slider_346_1" className="rev_slider fullscreenbanner" style={{ display: 'none' }} data-version="5.4.3.3">
                    <ul>	
                    
                        <li data-index="rs-964" data-transition="fade" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="default" data-thumb="" data-rotate="0" data-saveperformance="off" data-title="Slide" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="{&quot;revslider-weather-addon&quot; : { &quot;type&quot; : &quot;&quot; ,&quot;name&quot; : &quot;&quot; ,&quot;woeid&quot; : &quot;&quot; ,&quot;unit&quot; : &quot;&quot; }}" data-description="" data-beforeafter={`{"moveto":"50%|50%|50%|50%","bgColor":"#e7e7e7","bgType":"image","bgImage":"${slideimg1}",
                  "bgFit":"cover","bgPos":"center center","bgRepeat":"no-repeat","direction":"horizontal","easing":"Power2.easeInOut","delay":"500","time":"750","out":"fade","carousel":false}`}>
                   
                    <img src={require('./../../images/main-slider/slider5/slide1-sk.jpg')} alt="" data-beforeafter="after"  data-bgcolor="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="off" className="rev-slidebg" data-no-retina />
                    
                    
                    
                    <div className="tp-caption   tp-resizeme rs-parallaxlevel-5" 
                        id="slide-964-layer-1" 
                        data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
                        data-y="['middle','middle','middle','middle']" data-voffset="['110','110','110','0']" 
                        data-fontsize="['120','120','120','60']"
                        data-lineheight="['120','120','120','60']"
                        data-letterspacing="['50','50','50','5']"
                        data-width="['960','960','960','960']"
                        
                        
                        data-height="none"
                        data-whitespace="normal"
                    
                        data-type="text" 
                        data-beforeafter="before" 
                        data-responsive_offset="on" 
                    
                        data-frames='[{"delay":600,"speed":2000,"frame":"0","from":"sX:1;sY:1;opacity:0;fb:40px;","to":"o:1;fb:0;","ease":"Power4.easeInOut"},
                        {"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                        data-textalign="['center','center','center','center']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,50]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[50,50,50,50]"
                    
                        style={{ zIndex: 16, whiteSpace: 'nowrap', fontSize: 120, lineHeight: 120, fontWeight: 900, color: '#2e313b', letterSpacing: 10, fontFamily: '"Poppins", sans-serif', textTransform: 'uppercase' }}>Creative</div>
                 
                    <div className="tp-caption   tp-resizeme rs-parallaxlevel-5" 
                        id="slide-964-layer-2" 
                        data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
                        data-y="['middle','middle','middle','middle']" data-voffset="['210','210','210','100']" 
                        data-width="['960','960','960','320']"
                        data-height="none"
                        data-whitespace="normal"
                    
                        data-type="text" 
                        data-beforeafter="before" 
                        data-responsive_offset="on" 
                    
                        data-frames='[{"delay":600,"speed":2000,"frame":"0","from":"sX:1;sY:1;opacity:0;fb:40px;","to":"o:1;fb:0;","ease":"Power4.easeInOut"},
                        {"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                        data-textalign="['center','center','center','center']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[5,5,5,5]"
                    
                        style={{ zIndex: 11, minWidth: 960, maxWidth: 960, whiteSpace: 'normal', fontSize: 18, lineHeight: 24, fontWeight: 700, color: '#2e313b', letterSpacing: 1, fontFamily: '"Poppins", sans-serif', textTransform: 'uppercase' }}>Right design and right ideas matter a lot of in interior design business. a style that makes a statement.</div>
                    
            
                    <div className="tp-caption   tp-resizeme rs-parallaxlevel-4" 
                        id="slide-964-layer-3" 
                        data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
                        data-y="['bottom','bottom','bottom','bottom']" data-voffset="['70','70','70','80']" 
                        data-lineheight="['60','60','60','60']"
                        data-width="none"
                        data-height="none"
                        data-whitespace="nowrap"
                    
                        data-type="text" 
                        data-beforeafter="before" 
                        data-responsive_offset="on" 
                    
                        data-frames='[{"delay":700,"speed":2000,"frame":"0","from":"sX:1;sY:1;opacity:0;fb:40px;","to":"o:1;fb:0;","ease":"Power4.easeInOut"},
                        {"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"},
                        {"frame":"hover","speed":"200","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;fb:0;","style":"c:rgb(0,0,0);bg:rgb(0,0,0);"}]'
                        
                        data-textalign="['center','center','center','center']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[40,40,40,40]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[45,45,45,45]"
                    
                        style={{ zIndex: 12, whiteSpace: 'nowrap', fontSize: 15, fontWeight: 700, color: '#fff', letterSpacing: 5, fontFamily: '"Poppins", sans-serif', backgroundColor: '#2e313b', cursor: 'pointer' }}>
                            
                            <NavLink to={"/about-1"} title="READ MORE" rel="bookmark" style={{color: '#fff'}}>READ MORE</NavLink>
                        </div>
               
                    <div className="tp-caption   tp-resizeme  tp-blackshadow rs-parallaxlevel-5" 
                        id="slide-964-layer-4" 
                        data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
                        data-y="['middle','middle','middle','middle']" data-voffset="['110','110','110','0']" 
                        data-fontsize="['120','120','120','60']"
                        data-lineheight="['120','120','120','60']"
                        data-letterspacing="['50','50','50','5']"
                        data-width="['960','960','960','960']"
                        data-height="none"
                        data-whitespace="nowrap"
                        
                    
                        data-type="text" 
                        data-beforeafter="after" 
                        data-responsive_offset="on" 
                    
                        data-frames='[{"delay":2000,"speed":2000,"frame":"0","from":"sX:1;sY:1;opacity:0;fb:40px;","to":"o:1;fb:0;","ease":"Power4.easeInOut"},
                        {"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                        data-textalign="['center','center','center','center']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,50]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[50,50,50,50]"
                       
                    
                        style={{ zIndex: 16, whiteSpace: 'nowrap', fontSize: 120, lineHeight: 120, fontWeight: 900, color: '#ffffff', letterSpacing: 10, fontFamily: '"Poppins", sans-serif', textTransform: 'uppercase' }}>Creative </div>
                    
            
                    <div className="tp-caption   tp-resizeme rs-parallaxlevel-5" 
                        id="slide-964-layer-5" 
                        data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
                        data-y="['middle','middle','middle','middle']" data-voffset="['210','210','210','100']" 
                        data-width="['960','960','960','320']"
                        data-height="none"
                        data-whitespace="normal"
                    
                        data-type="text" 
                        data-beforeafter="after" 
                        data-responsive_offset="on" 
                    
                        data-frames='[{"delay":2100,"speed":2000,"frame":"0","from":"sX:1;sY:1;opacity:0;fb:40px;","to":"o:1;fb:0;","ease":"Power4.easeInOut"},
                        {"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                        data-textalign="['center','center','center','center']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[5,5,5,5]"
                    
                        style={{ zIndex: 17, minWidth: 960, maxWidth: 960, whiteSpace: 'normal', fontSize: 18, lineHeight: 24, fontWeight: 700, color: '#ffffff', letterSpacing: 1, fontFamily: '"Poppins", sans-serif', textTransform: 'uppercase' }}>Right design and right ideas matter a lot of in interior design business. a style that makes a statement.</div>
             
                    <div className="tp-caption   tp-resizeme rs-parallaxlevel-4" 
                        id="slide-964-layer-6" 
                        data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
                        data-y="['bottom','bottom','bottom','bottom']" data-voffset="['70','70','70','80']" 
                        data-lineheight="['60','60','60','60']"
                        data-width="none"
                        data-height="none"
                        data-whitespace="nowrap"
                    
                        data-type="text" 
                        data-beforeafter="after" 
                        data-responsive_offset="on" 
                    
                        data-frames='[{"delay":2200,"speed":2000,"frame":"0","from":"sX:1;sY:1;opacity:0;fb:40px;","to":"o:1;fb:0;","ease":"Power4.easeInOut"},
                        {"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"},
                        {"frame":"hover","speed":"200","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;fb:0;","style":"c:rgb(0,0,0);bg:rgb(255,255,255);"}]'
                        data-textalign="['center','center','center','center']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[40,40,40,40]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[45,45,45,45]"
                       
                        style={{ zIndex: 18, whiteSpace: 'nowrap', fontSize: 15,fontWeight: 700, color: '#000', letterSpacing: 5, fontFamily: '"Poppins", sans-serif', backgroundColor: 'rgb(255,255,255)', cursor: 'pointer' }}>
                            <NavLink to={"/about-1"} title="READ MORE" rel="bookmark">READ MORE</NavLink>
                        </div>
                    </li>
                    
                    
                        <li data-index="rs-965" data-transition="fade" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="default" data-thumb="" data-rotate="0" data-saveperformance="off" data-title="Slide" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="{&quot;revslider-weather-addon&quot; : { &quot;type&quot; : &quot;&quot; ,&quot;name&quot; : &quot;&quot; ,&quot;woeid&quot; : &quot;&quot; ,&quot;unit&quot; : &quot;&quot; }}" data-description="" data-beforeafter={`{"moveto":"50%|50%|50%|50%","bgColor":"#e7e7e7","bgType":"image","bgImage":"${slideimg2}",
                  "bgFit":"cover","bgPos":"center center","bgRepeat":"no-repeat","direction":"horizontal","easing":"Power2.easeInOut","delay":"500","time":"750","out":"fade","carousel":false}`}>
                   
                    <img src={require('./../../images/main-slider/slider5/slide2-sk.jpg')} alt="" data-beforeafter="after"  data-bgcolor=""  data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="off" className="rev-slidebg" data-no-retina />
                   
                    
                   
                    <div className="tp-caption   tp-resizeme rs-parallaxlevel-5" 
                        id="slide-965-layer-1" 
                        data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
                        data-y="['middle','middle','middle','middle']" data-voffset="['110','110','110','0']" 
                        data-fontsize="['120','120','120','60']"
                        data-lineheight="['120','120','120','60']"
                        data-letterspacing="['50','50','50','5']"
                        data-width="['960','960','960','960']"
                        
                        data-height="none"
                        data-whitespace="normal"
                    
                        data-type="text" 
                        data-beforeafter="before" 
                        data-responsive_offset="on" 
                    
                        data-frames='[{"delay":600,"speed":2000,"frame":"0","from":"sX:1;sY:1;opacity:0;fb:40px;","to":"o:1;fb:0;","ease":"Power4.easeInOut"},
                        {"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                        data-textalign="['center','center','center','center']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,50]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[50,50,50,50]"
                    
                        style={{zIndex: 16, whiteSpacee: 'nowrap', fontSize: 120, lineHeight: 120, fontWeight: 900, color: '#2e313b', letterSpacing: 10, fontFamily: '"Poppins", sans-serif', textTransform:'uppercase'}}>Unique</div>
                  
                    <div className="tp-caption   tp-resizeme rs-parallaxlevel-5" 
                        id="slide-965-layer-2" 
                        data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
                        data-y="['middle','middle','middle','middle']" data-voffset="['210','210','210','100']" 
                        data-width="['960','960','960','320']"
                        data-height="none"
                        data-whitespace="normal"
                    
                        data-type="text" 
                        data-beforeafter="before" 
                        data-responsive_offset="on" 
                    
                        data-frames='[{"delay":600,"speed":2000,"frame":"0","from":"sX:1;sY:1;opacity:0;fb:40px;","to":"o:1;fb:0;","ease":"Power4.easeInOut"},
                        {"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                        data-textalign="['center','center','center','center']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[5,5,5,5]"
                    
                        style={{ zIndex: 11, minWidth: 960, maxWidth: 960, whiteSpace: 'normal', fontSize: 18, lineHeight: 24, fontWeight: 700, color: '#2e313b', letterSpacing: 1, fontFamily: '"Poppins", sans-serif', textTransform: 'uppercase' }}>Right design and right ideas matter a lot of in interior design business.</div>
                    
                    <div className="tp-caption   tp-resizeme rs-parallaxlevel-4" 
                        id="slide-965-layer-3" 
                        data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
                        data-y="['bottom','bottom','bottom','bottom']" data-voffset="['70','70','70','80']" 
                        data-width="none"
                        data-height="none"
                        data-whitespace="nowrap"
                        data-lineheight="['60','60','60','60']"
                    
                        data-type="text" 
                        data-beforeafter="before" 
                        data-responsive_offset="on" 
                    
                        data-frames='[{"delay":700,"speed":2000,"frame":"0","from":"sX:1;sY:1;opacity:0;fb:40px;","to":"o:1;fb:0;","ease":"Power4.easeInOut"},
                        {"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"},
                        {"frame":"hover","speed":"200","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;fb:0;","style":"c:rgb(0,0,0);bg:rgb(0,0,0);"}]'
                        
                        data-textalign="['center','center','center','center']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[40,40,40,40]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[45,45,45,45]"
                    
                        style={{ zIndex: 12, whiteSpace: 'nowrap', fontSize: 15, fontWeight: 700, color: '#fff', letterSpacing: 5, fontFamily: '"Poppins", sans-serif', backgroundColor: '#2e313b', cursor: 'pointer' }}>
                            <NavLink to={"/about-1"} title="READ MORE" rel="bookmark" style={{color: '#fff'}}>READ MORE</NavLink>
                        </div>
                        
                   
                    <div className="tp-caption   tp-resizeme  tp-blackshadow rs-parallaxlevel-5" 
                        id="slide-965-layer-4" 
                        data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
                        data-y="['middle','middle','middle','middle']" data-voffset="['110','110','110','0']" 
                        data-fontsize="['120','120','120','60']"
                        data-lineheight="['120','120','120','60']"
                        data-letterspacing="['50','50','50','5']"
                        data-width="['960','960','960','960']"
                        data-height="none"
                        data-whitespace="nowrap"
                    
                        data-type="text" 
                        data-beforeafter="after" 
                        data-responsive_offset="on" 
                    
                        data-frames='[{"delay":2000,"speed":2000,"frame":"0","from":"sX:1;sY:1;opacity:0;fb:40px;","to":"o:1;fb:0;","ease":"Power4.easeInOut"},
                        {"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                        data-textalign="['center','center','center','center']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,50]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[50,50,50,50]"
                       
                        style={{zIndex: 16, whiteSpacee: 'nowrap', fontSize: 120, lineHeight: 120, fontWeight: 900, color: '#ffffff', letterSpacing: 10, fontFamily: '"Poppins", sans-serif', textTransform:'uppercase'}}>Unique </div>
                    
                    <div className="tp-caption   tp-resizeme rs-parallaxlevel-5" 
                        id="slide-965-layer-5" 
                        data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
                        data-y="['middle','middle','middle','middle']" data-voffset="['210','210','210','100']" 
                        data-width="['960','960','960','320']"
                        data-height="none"
                        data-whitespace="normal"
                    
                        data-type="text" 
                        data-beforeafter="after" 
                        data-responsive_offset="on" 
                    
                        data-frames='[{"delay":2100,"speed":2000,"frame":"0","from":"sX:1;sY:1;opacity:0;fb:40px;","to":"o:1;fb:0;","ease":"Power4.easeInOut"},
                        {"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                        data-textalign="['center','center','center','center']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[5,5,5,5]"
                    
                        style={{ zIndex: 17, minWidth: 960, maxWidth: 960, whiteSpace: 'normal', fontSize: 18, lineHeight: 24, fontWeight: 700, color: '#ffffff', letterSpacing: 1, fontFamily: '"Poppins", sans-serif', textTransform: 'uppercase' }}>Right design and right ideas matter a lot of in interior design business.</div>
                    
                    <div className="tp-caption   tp-resizeme rs-parallaxlevel-4" 
                        id="slide-965-layer-6" 
                        data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
                        data-y="['bottom','bottom','bottom','bottom']" data-voffset="['70','70','70','80']" 
                        data-width="none"
                        data-height="none"
                        data-whitespace="nowrap"
                        data-lineheight="['60','60','60','60']"
                    
                        data-type="text" 
                        data-beforeafter="after" 
                        data-responsive_offset="on" 
                    
                        data-frames='[{"delay":2200,"speed":2000,"frame":"0","from":"sX:1;sY:1;opacity:0;fb:40px;","to":"o:1;fb:0;","ease":"Power4.easeInOut"},
                        {"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"},
                        {"frame":"hover","speed":"200","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;fb:0;","style":"c:rgb(0,0,0);bg:rgb(255,255,255);"}]'
                        data-textalign="['center','center','center','center']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[40,40,40,40]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[45,45,45,45]"
                       
                        style={{ zIndex: 18, whiteSpace: 'nowrap', fontSize: 15, fontWeight: 700, color: '#000', letterSpacing: 5, fontFamily: '"Poppins", sans-serif', backgroundColor: 'rgb(255,255,255)', cursor: 'pointer' }}>
                            <NavLink to={"/about-1"} title="READ MORE" rel="bookmark">READ MORE</NavLink></div>
                    </li>                    
                    
                    </ul>
                    <div className="tp-bannertimer tp-bottom" style={{ visibility: 'hidden !important' }}></div>	
                </div>
            </div>
            </>
        );
    }
};

export default Slider5;