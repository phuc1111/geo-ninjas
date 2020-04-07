<template>
    <div class="map">
       <div class="google-map" id="map"></div>
    </div>
</template>
<script>
import firebase from 'firebase'
import db from '@/firebase/init'
export default {
    name: 'GMap',
    data(){
        return {
            lat: 16.047199,
            lng: 108.219955
        }
    },
    methods: {
        renderMap(){
            const map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: this.lat, lng: this.lng},
                zoom: 10,
                maxZoom: 20,
                minZoom:3,
                streetViewControl: false
            })
        }
    },
    mounted(){
        //get current user
        let user = firebase.auth().currentUser
       

        //get user geolocation
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(pos => {
                this.lat = pos.coords.latitude
                this.lng = pos.coords.longitude
                //find user and update
                 db.collection('users').where('user_id', '==', user.uid).get()
                 .then(snapshot => {
                    snapshot.forEach((doc) => {
                        db.collection('users').doc(doc.id).update({
                            geolocation: {
                                lat: pos.coords.latitude,
                                lng: pos.coords.longitude
                            }
                        })
                    })
                 }).then(() => {
                      this.renderMap()
                 })
                // this.renderMap()
            }, (err) => {
                console.log(err);
                this.renderMap()
            }, {maximumAge: 60000, timeout: 3000})
        }else {
            //default value
            this.renderMap()
        }
    }
}
</script>
<style>
    .google-map{
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        background: #fff;
        height: 100%;
        width: 100%;
        margin: 0 auto;
    }
</style>