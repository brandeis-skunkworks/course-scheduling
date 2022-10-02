import React from 'react';
import './BlockSched.css';

import blocks from './blocks';
import blocks_pic from '../img/blocks.png';
import mapAreas from './img-areas-map';
// import ImageMapper from 'react-image-mapper';

import { connect } from 'react-redux';
import { chosenCourse, removeChosenCourse, addChosenCourse, deleteChosenCourse } from '../redux/actions';

class ImageBlockSched extends React.Component {
    constructor(props) {
        super(props);

        this.load = this.load.bind(this);
        this.clicked = this.clicked.bind(this);
    }

    load() {
        console.log('Image loaded');
    }

    findBlockByName(name) {
        return blocks.filter(item => item.name === name)[0];
    }

    chooseColor(block) {
        let color = "rgba(192,192,192,0.3)"; // grey opaque
        const id = block.id;

        if (id in this.props.value) {
            const pref = this.props.value[id];

            switch (pref.preference) {
                case "0": // MUST 
                    color = "rgba(255,0,0,0.3)" // red opaque
                    break;
                case "1": // PREFERRED
                case "2":
                case "3":
                    color = "rgba(255,255,0,0.3)" // yellow opaque
                    break;

                case "4": // NO
                    color = "rgba(0, 0, 0, 0.5)" // black opaque
                    break;

                default: // DEFAULT (NOT CHOSEN / IN REVIEW MODE)
                    color = "rgba(192,192,192,0.3)"; // grey opaque
            }
        } else if (!this.props.review && (id in this.props.chosen_courses)) {
            color = "rgba(0,255,0,0.3)" // green opaque (CHOSEN - REVIEW MODE)
        }
        return color;
    }

    handleClick(course) {
        console.log(course);
        if (course.id in this.props.value) {
            // if this block is submitted, delete other ones and choose this block only
            Object.entries(this.props.chosen_courses).map(arr => arr[1]).forEach(val => this.props.deleteChosenCourse(val.id));
            this.props.addChosenCourse(course);
        }
        if (course.id in this.props.chosen_courses) {
            // if this block is already chosen, remove it
            this.props.deleteChosenCourse(course.id);
            this.props.removeChosenCourse();
        } else if (!this.props.review) {
            // if this block is not chosen and the page is not in reviewing mode:
            // delete all chosen submitted blocks
            Object.entries(this.props.chosen_courses).map(arr => arr[1]).forEach(val => {
                if (val.id in this.props.value) {
                    this.props.deleteChosenCourse(val.id);
                }
            });
            // add to the chosen blocks list
            this.props.chosenCourse(course);
            this.props.addChosenCourse(course);
        }
    }

    clicked(area) {
        console.log(`You clicked on ${area.name}!`);
        const blockName = area.name.split("-")[0];

        const course = this.findBlockByName(blockName);
        this.handleClick(course);
    }

    changeBlockColor() {
        // find the appropriate color for each block and create new MAP areas for ImageMapper
        const newAreas = mapAreas.map(area => {
            const blockName = area.name.split("-")[0];
            const course = this.findBlockByName(blockName);

            const color = this.chooseColor(course);
            area.preFillColor = color;
            return area;
        });
        return newAreas;
    }

    render() {
        const URL = blocks_pic;
        const MAP = {
            name: "my-map",
            areas: this.changeBlockColor()
        }

        return (
            <div className="pref_block">
                <Mapper url={URL} map={MAP} load={this.load} clicked={this.clicked} />
            </div>
        );
    }
}

function Mapper(props) {
    return (
        <div className="container">
            {/* <ImageMapper src={props.url} map={props.map} width={800} imgWidth={1472} onLoad={props.load} onClick={area => props.clicked(area)}/> */}
        </div>
    )
}

const mapStateToProps = state => ({
    chosen: state.chosen,
    chosen_courses: state.chosen_courses,
    value: state.value,
    review: state.review,
});

const mapDispatchToProps = (dispatch) => {
    return {
        chosenCourse: (chosen) => { dispatch(chosenCourse(chosen)) },
        removeChosenCourse: () => { dispatch(removeChosenCourse()) },
        addChosenCourse: (chosen) => { dispatch(addChosenCourse(chosen)) },
        deleteChosenCourse: (id) => { dispatch(deleteChosenCourse(id)) },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageBlockSched);