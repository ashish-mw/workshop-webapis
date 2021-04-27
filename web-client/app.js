const API_URL =  localStorage.getItem('url') || 'http://localhost:3333';

const app = new Vue({
  el: '#app',
  data: {
    doctors: [],
    serviceUsers: [],
    isDoctorsLoading: false,
    isServiceUsersLoading: false,
    showServiceUserAdd: false,
    serviceUserUnderEdit: null,
    newPatient: {
      "fullName": "",
      "symptoms": '',
      "assignedDoctor": null
    }
  },
  mounted: function () {
    this.fetchData();
  },
  methods: {
    clearNewUser: function () {
      this.newPatient = {
        "fullName": "",
        "symptoms": '',
        "assignedDoctor": null,
      };
    },
    toggleServiceUserAdd: function () {
      this.clearNewUser();
      this.showServiceUserAdd = !this.showServiceUserAdd;
    },
    editServiceUser: function (user) {
      this.serviceUserUnderEdit = user;
    },
    deleteServiceUser: function (id) {
      var _self = this;
      fetch(`${API_URL}/service-users/${id}`, {
        method: 'DELETE',
        body: {}
      })
      .then(res => res.json())
      .then(json => {
        console.log(json)
        _self.fetchServiceUsers()
      })
      .catch(e => {
        console.error(e);
      })
    },
    fetchDoctors: function () {
      let _self = this;
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
    },
    fetchServiceUsers: function () {
      let _self = this;
      _self.isServiceUsersLoading = true;
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
    },
    fetchData: function () {
      this.fetchDoctors();
      this.fetchServiceUsers();
    },
    addNewServiceUser: function (e) {
      e.preventDefault();
      var _self = this;
      var payload = {
        "fullName": _self.newPatient.fullName,
        "symptoms": _self.newPatient.symptoms.split(','),
        "assignedDoctor": _self.newPatient.assignedDoctor
      }
      fetch(`${API_URL}/service-users`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
      .then(res => res.json())
      .then(json => {
        console.log(json)
        _self.fetchServiceUsers()
        _self.toggleServiceUserAdd()
      })
      .catch(e => {
        console.error(e);
      })
    }
  }
})