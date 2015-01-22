function findDistance(loc1, loc2) {
    // GOOGLE MAGIC HERE
    return (loc1.lon - loc2.lon) * (loc1.lon - loc2.lon)
}

distance = (loca, locb)
    // GOOGLE MAGIC HERE
    return (lon1-lon2)**2 + (lat1-lat2)**2

function(request):
    date = request.date
    time = request.time_calc
    pickup = request.pickup
    dropoff = request.dropoff
    results = request.results

    search Request database
    // making results
    timediff = newrequest.time_calc-time
    pickupdist = distance(pickup, newrequest.pickup)
    dropoffdist = distance(dropoff, newrequest.dropoff)

    for each newrequest:
        if newrequest.date == date && timediff <= 100 && pickupdist <= 'NUMBER' && dropoffdist <= "NUMBER":
            results += newrequest

    // CHANGE THESE LATER
    timeweight: 1,
    pickupweight: 1,
    dropoffweight: 1,

    cost = (timeweight * timediff) + (pickupweight * pickupdist) + (dropoffweight * dropoffdist)

    sort results by cost

    return sorted result