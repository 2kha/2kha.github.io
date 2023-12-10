
/**
 * @summary     Forward Kinematics
 * @description Visualization for Forward Kinematics
 * @version     1.0.3
 * @file        jqForwardKinematics
 * @author      2KHA 
 * @contact     tlaung@gmail.com
 * @copyright   Copyright (C) Mango AI.
 *
 * This source file is free software, available under the following license:
 *    GNU GENERAL PUBLIC LICENSE license - https://2kha.github.io
 *
 * This source file is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.
 * 
 */



;(function ($) {

    $.fn.jqForwardK = function (options) {

        var map = this;
        var svg = null;

        var selectable = false;
		
		var bones = [];	
		var bases = [];	

        var shape = false;

        var origin = {
            x: 0,
            y: 0,
            dx: 0,
            dy: 0
        };

    
		var applyRotationTransform = function (element, cx = 0, cy = 0, angle = 0) {

            $(element).attr('transform', 'rotate(' + angle + ',' + cx + ',' + cy + ')');
        };
		
		var getRotation
		
        var initEvents = function() {

           $(".rotate").on("change", function(){
			   
			   var self = $(this);
			   
			   var angle = parseFloat($(this).val());
			   
			   var id = parseInt(self[0].id.split('-')[1]) - 1;
			   
			   var cx = parseFloat($(bases[id]).attr("cx"));
			   var cy = parseFloat($(bases[id]).attr("cy"));
			   
			   
			   applyRotationTransform($(bones[id]), cx, cy, angle);
			   
		   });
        }


        var initMap = function (displayBack) {

            
            svg = $(map).find('svg').eq(0);

            origin.x = $(svg).offset().left;
            origin.y = $(svg).offset().top;
			
			bones.push($(map).find('#lq1').eq(0));
			bones.push($(map).find('#lq2').eq(0));
			bones.push($(map).find('#lq3').eq(0));
			bones.push($(map).find('#lq4').eq(0));	

			bases.push($(map).find('#q1').eq(0));
			bases.push($(map).find('#q2').eq(0));
			bases.push($(map).find('#q3').eq(0));
			bases.push($(map).find('#q4').eq(0));
        }

        initMap();
		
		initEvents();


        return map;


    };

}(jQuery));


