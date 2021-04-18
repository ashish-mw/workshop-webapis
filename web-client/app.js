const API_URL = 'http://localhost:3333';

const app = new Vue({
  el: '#app',
  data: {
    doctors: [],
    serviceUsers: [],
    isDoctorsLoading: false,
    isServiceUsersLoading: false,
  },
  mounted: function () {
    this.fetchData();
  },
  methods: {
    fetchData: function () {
      let _self = this;
      _self.isServiceUsersLoading = true;
      _self.isDoctorsLoading = true;
      fetch(`${API_URL}/doctors`)
        .then(res => res.json())
        .then(json => {
          _self.isDoctorsLoading = false;
          _self.doctors = json.data
        })
        .catch(e => {
          console.error(e);
          _self.isDoctorsLoading = false;
        });
      fetch(`${API_URL}/service-users`)
        .then(res => res.json())
        .then(json => {
          _self.isServiceUsersLoading = false;
          _self.serviceUsers = json.data.map(d => {
            let newD = { ...d }
            newD.admittedDateLocale = new Date(d.admittedDate).toLocaleString();
            return newD;
          })
        })
        .catch(e => {
          console.error(e);
          _self.isServiceUsersLoading = false;
        });
    }
  }
})