(function () {

  "use strict"


  // Plugin Constructor
  let TagsInput = function (opts) {
    this.options = Object.assign(TagsInput.defaults, opts);
    this.init();
  }

  // Initialize the plugin
  TagsInput.prototype.init = function (opts) {
    this.options = opts ? Object.assign(this.options, opts) : this.options;

    if (this.initialized)
      this.destroy();

    if (!(this.orignal_input = document.getElementById(this.options.selector))) {
      console.error("tags-input couldn't find an element with the specified ID");
      return this;
    }

    this.arr = [];
    this.wrapper = document.createElement('div');
    this.input = document.createElement('input');
    init(this);
    initEvents(this);

    this.input.placeholder = "e.g. Small,Medium,Large";

    this.initialized = true;
    return this;
  }

  // Add Tags
  TagsInput.prototype.addTag = function (string) {

    if (this.anyErrors(string))
      return;

    this.arr.push(string);
    let self = this;

    let tag = document.createElement('span');
    tag.className = this.options.tagClass;
    tag.innerText = string;

    let closeIcon = document.createElement('button');
    closeIcon.innerHTML = '&times;';

    // delete the tag when icon is clicked
    closeIcon.addEventListener('click', function (e) {
      e.preventDefault();
      let tag = this.parentNode;

      for (let i = 0; i < self.wrapper.childNodes.length; i++) {
        if (self.wrapper.childNodes[i] == tag)
        self.deleteTag(tag, i);
      }
    })


    tag.appendChild(closeIcon);
    this.wrapper.insertBefore(tag, this.input);
    this.orignal_input.value = this.arr.join(',');

    return this;
  }

  // Delete Tags
  TagsInput.prototype.deleteTag = function (tag, i) {
    tag.remove();
    this.arr.splice(i, 1);
    this.orignal_input.value = this.arr.join(',');
    return this;
  }

  // Make sure input string have no error with the plugin
  TagsInput.prototype.anyErrors = function (string) {
    if (this.options.max != null && this.arr.length >= this.options.max) {
      console.log('max tags limit reached');
      return true;
    }

    if (!this.options.duplicate && this.arr.indexOf(string) != -1) {
      console.log('duplicate found " ' + string + ' " ')
      return true;
    }

    return false;
  }

  // Add tags programmatically 
  TagsInput.prototype.addData = function (array) {
    let plugin = this;

    array.forEach(function (string) {
      plugin.addTag(string);
    })
    return this;
  }

  // Get the Input String
  TagsInput.prototype.getInputString = function () {
    return this.arr.join(',');
  }


  // destroy the plugin
  TagsInput.prototype.destroy = function () {
    this.orignal_input.removeAttribute('hidden');

    delete this.orignal_input;
    let self = this;

    Object.keys(this).forEach(function (key) {
      if (self[key] instanceof HTMLElement)
        self[key].remove();

      if (key != 'options')
        delete self[key];
    });

    this.initialized = false;
  }

  // Private function to initialize the tag input plugin
  function init(tags) {
    tags.wrapper.append(tags.input);
    tags.wrapper.classList.add(tags.options.wrapperClass);
    tags.orignal_input.setAttribute('hidden', 'true');
    tags.orignal_input.parentNode.insertBefore(tags.wrapper, tags.orignal_input);
  }

  // initialize the Events
  function initEvents(tags) {
    tags.wrapper.addEventListener('click', function () {
      tags.input.focus();
    });


    tags.input.addEventListener('keydown', function (e) {
      let str = tags.input.value.trim();

      if (!!(~[9, 13, 188].indexOf(e.keyCode))) {
        e.preventDefault();
        tags.input.value = "";
        if (str != "")
          tags.addTag(str);
      }

    });
  }


  // Set All the Default Values
  TagsInput.defaults = {
    selector: '',
    wrapperClass: 'tagswrapper',
    tagClass: 'tag',
    max: null,
    duplicate: false
  }

  window.TagsInput = TagsInput;

})();

const variant1 = new TagsInput({
  selector: 'option-2',
  duplicate: false,
  max: 10
});
variant1.addData([]);

const variant2 = new TagsInput({
  selector: 'option-4',
  duplicate: false,
  max: 10
});
variant2.addData([]);

const variant3 = new TagsInput({
  selector: 'option-6',
  duplicate: false,
  max: 10
});
variant3.addData([]);

const variant4 = new TagsInput({
  selector: 'option-8',
  duplicate: false,
  max: 10
});
variant4.addData([]);