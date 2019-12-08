/*
    Child component to manage the form
*/
Vue.component('ItemForm', {
    template: `
        <div>
            <p>
                <input type="text" placeholder="Nombre" v-model="newItem.name"/>
            </p>
            <p>
                <input type="number" placeholder="Horas"  v-model="newItem.hours"/>
            </p>
            <p>
                <button v-bind:disabled="!enableSave" v-on:click="save">Guardar</button>
            </p>
        </div>
    `,
    // declare the initial data of the form
    data() {
        return {
            newItem: {
                name: null,
                hours: null
            }
        }
    },
    methods: {
        // when save we don't have the list so we need to notify the parent to add the element
        save() {
            this.$emit('add-item', this.newItem);
            // reset fields
            this.newItem.name = null;
            this.newItem.hours = null;
        }
    },
    computed: {
        // we need to know if we got valid data to save
        enableSave() {
            return this.newItem.name && this.newItem.hours;
        }
    },
});

/*
    Component to manage list behavior
*/
Vue.component('ItemList', {
    template: `
        <div>
            <div v-show="items.length > 0">
                <h3>Lista de {{title}}</h3>
                <ol>
                    <li v-for="(item, i) in items" :key="i">
                        {{item.name}} ({{item.hours}} horas) <button v-on:click="deleteItem">X</button>
                    </li>
                </ol>
            </div>
        </div>
    `,
    // topic will be the type of elements that will hold this list
    // items will be the items to be rendered each one with name and hours
    props: ['topic', 'items'],
    computed: {
        title() {
            return this.topic[0].toUpperCase() + this.topic.slice(1) + 's'
        }
    },
    methods: {
        // delete one item from the list by the index
        deleteItem(index) {
            this.items.splice(index, 1);
        }
    }
});

/*
    Main component for list and form interaction
*/
Vue.component('Tracker', {
    template: /*html*/`
        <div>
            <h1>
                {{title}} que me gustan
            </h1>
            <item-form v-on:add-item="save"></item-form>
            <item-list v-bind:items="list" v-bind:topic="topic"></item-list>
            <p>
                Llevo <strong>{{ totalTime }}</strong> horas invertidas total.
            </p>
            <img v-bind:src="reactionImageSrc" alt="reaction">
            <slot></slot>
        </div>
    `,
    // parent properties that we need to build this list
    // topic is the type of items that we will track
    // happyImgSrc and sadImgSrc will be the image ursl that we will show with an empty/not empty list
    props: ['topic', 'happyImgSrc', 'sadImgSrc'],
    data() {
        return {
            list: [],
            totalTime: 0
        }
    },
    // return the image corresponding depending if the list is empty or not
    computed: {
        reactionImageSrc() {
            if (this.totalTime > 0) {
                return this.happyImgSrc;
            } else {
                return this.sadImgSrc;
            }
        },
        // title is formated as pascal case in plural
        title() {
            return this.topic[0].toUpperCase() + this.topic.slice(1) + 's'
        }
    },
    // with each modification to the list we may want to update the total of hours invested
    watch: {
        list() {
            this.totalTime = this.list.reduce(((acumulated, current) => acumulated + current.hours), 0);
        }
    },
    methods: {
        // add a new element to the list
        save(newItem) {
            this.list.push({
                name: newItem.name,
                hours: parseInt(newItem.hours, 10)
            });
        }
    }
})

/* 
    Main application component

    We wil render a list of trackers, each one will have a topic and will hold a list of different items, each one containing the name and hours invested
    For example is we make a track with topic 'pelicula' we could track a list of movies and how much time we insted watching them
*/
var app = new Vue({
    el: '#app',

    data() {
        return {
            // define topic of each tracker, we also need a key that will be use to search a image of the related topic in a placeholder image API
            topics: [
                {
                    name: 'anime',
                    key: 'anime'
                },
                {
                    name: 'musica',
                    key: 'music'
                },
                {
                    name: 'pelicula',
                    key: 'movies'
                },
                {
                    name: 'serie',
                    key: 'series'
                },
                {
                    name: 'programa',
                    key: 'program'
                }
            ]
        }
    },
    computed: {
        // to render the trackers we need 2 images, one that will be shown if tracker is empty and other when the tracker has something in the list
        trackers(){
            return this.topics.map((topic) => {
                // to get random images we will use a image placeholder API, passing the key of the topic
                let url = 'https://loremflickr.com/320/240/';
                return {
                    topic: topic.name,
                    // append random=n to avoid getting the same image twice for each topic as the docs suggest
                    happy: url + topic.key + '?random=1',
                    sad: url + topic.key + '?random=2'
                }
            })
        }
    }
})