import isDOM from 'is-dom';
import error from "./error";

const InfiniteTree = require("infinite-tree");
import "infinite-tree/dist/infinite-tree.css";

class NavTree {
    // Creates new NavTree object.
    constructor(args){

        const el = args.el;
        if(!isDOM(el)){
            error("Invalid DOM element", el);
            return;
        } 

        const vm = this;
        vm.selectedNodes = [];
        // element
        vm.el = el; 
        // Assign or Merge the options
        vm.options = args.options;
        // Assign or Merge the callback
        vm.callback = args.callback;
        vm.initializeTree(); // initialize the tree...
        vm.eventListeners(); // initialize events...

    }
    initializeTree(){
        const vm = this;
        vm.defaultOptions();
        vm.tree = new InfiniteTree(vm.el, vm.options);
    }
    defaultOptions(){
        const vm = this;
        vm.options.shouldLoadNodes = function(parentNode) { // check if parent has loadOnDemand children
            return !parentNode.hasChildren() && parentNode.loadOnDemand ? true : false;
        };
        vm.options.shouldSelectNode = function(node) { // Determine if the node is selectable
            return !node || (node === vm.tree.getSelectedNode()) ? false : true; // false -> // Prevent from deselecting the current node
        };
    }
    eventListeners(){
        const vm = this;
        
        vm.tree.on("click", (event) => {
            if(vm.callback && vm.callback.handlesOnClick){
                vm.callback.handlesOnClick(event, vm);
                return;
            }
            console.log("click");
        });

        vm.tree.on("keyDown", (event) => {
            const vm = this;
            if(vm.callback && vm.callback.handlesOnKeyDown){
                vm.callback.handlesOnKeyDown(event, vm);
                return;
            }
            console.log("handlesOnKeyDown");
        }); 

        vm.tree.on("keyUp", (event) => {
            const vm = this;
            if(vm.callback && vm.callback.handlesOnKeyUp){
                vm.callback.handlesOnKeyUp(event, vm);
                return;
            }
            console.log("handlesOnKeyUp");
        });

        vm.tree.on("contentWillUpdate", (event) => {
            const vm = this;
            if(vm.callback && vm.callback.handlesOnContentWillUpdate){
                vm.callback.handlesOnContentWillUpdate(event, vm);
                return;
            }
            console.log("handlesOnContentWillUpdate");
        });

        vm.tree.on("contentDidUpdate", (event) => {
            const vm = this;
            if(vm.callback && vm.callback.handlesOnContentDidUpdate){
                vm.callback.handlesOnContentDidUpdate(event, vm);
                return;
            }
            console.log("handlesOnContentDidUpdate");
        });

        vm.tree.on("openNode", (event) => {
            const vm = this;
            if(vm.callback && vm.callback.handlesOnOpenNode){
                vm.callback.handlesOnOpenNode(event, vm);
                return;
            }
            console.log("handlesOnOpenNode");
        });

        vm.tree.on("closeNode", (event) => {
            const vm = this;
            if(vm.callback && vm.callback.handlesOnCloseNode){
                vm.callback.handlesOnCloseNode(event, vm);
                return;
            }
            console.log("handlesOnCloseNode");
        });

        vm.tree.on("selectNode", (event) => {
            const vm = this;
            if(vm.callback && vm.callback.handlesOnSelectNode){
                vm.callback.handlesOnSelectNode(event, vm);
                return;
            }
            console.log("handlesOnSelectNode");
        });

        vm.tree.on("willOpenNode", (event) => {
            const vm = this;
            if(vm.callback && vm.callback.handlesOnWillOpenNode){
                vm.callback.handlesOnWillOpenNode(event, vm);
                return;
            }
            console.log("handlesOnWillOpenNode");
        });

        vm.tree.on("willCloseNode", (event) => {
            const vm = this;
            if(vm.callback && vm.callback.handlesOnWillCloseNode){
                vm.callback.handlesOnWillCloseNode(event, vm);
                return;
            }
            console.log("handlesOnWillCloseNode");
        });

        vm.tree.on("willSelectNode", (event) => {
            const vm = this;
            if(vm.callback && vm.callback.handlesOnWillSelectNode){
                vm.callback.handlesOnWillSelectNode(event, vm);
                return;
            }
            console.log("handlesOnWillSelectNode");
        });

        vm.tree.on("clusterDidChange", (event) => {
            const vm = this;
            if(vm.callback && vm.callback.handlesOnclusterDidChange){
                vm.callback.handlesOnclusterDidChange(event, vm);
                return;
            }
            console.log("handlesOnclusterDidChange");
        });
    }
}

export default NavTree;