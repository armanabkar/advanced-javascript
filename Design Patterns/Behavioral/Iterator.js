class RadioStation {
  constructor(frequency) {
    this.frequency = frequency;
  }

  getFrequency() {
    return this.frequency;
  }
}

class StationList {
  constructor() {
    this.stations = [];
  }

  addStation(station) {
    this.stations.push(station);
  }

  removeStation(toRemove) {
    const toRemoveFrequency = toRemove.getFrequency();
    this.stations = this.stations.filter((station) => {
      return station.getFrequency() !== toRemoveFrequency;
    });
  }

  getStations() {
    return this.stations.forEach((station) =>
      console.log(station.getFrequency())
    );
  }
}

const stationList = new StationList();

stationList.addStation(new RadioStation(89));
stationList.addStation(new RadioStation(101));
stationList.addStation(new RadioStation(102));
stationList.addStation(new RadioStation(103.2));

stationList.getStations();

stationList.removeStation(new RadioStation(89)); // Will remove station 89
