module.exports = function (app) {
    /*   if (process.env.NODE_ENV === 'production') {
           console.log("production environment. no seed data.")
           return;
       }
   */
    let checkError = function (err) {
        if (err) {
            console.log("-------- Error ------------")
            console.log(err)
            console.log("-------- Error ------------")
            throw (err)
        }
    }

    let Account = app.models.Account;

    Account.signup({
        accountName: "Gulfcoast Realty",
        firstName: "Bobby",
        lastName: "Broker",
        email: "bobby@gulfcoast.com",
        username: "bobby",
        password: "bobby"
    }, function (err, token) {
        if (err) {
            throw (err);
        }

        RegisteredUser = app.models.RegisteredUser;

        RegisteredUser.findById(token.userId, function (err, registeredUser) {

            let Address = app.models.Address;

            Address.create({
                street: "1234 Main St",
                city: "Smalltown",
                state: "MO",
                zipcode: "12345",
                accountId: registeredUser.accountId
            }, function (err, mainStAddress) {
                checkError(err)

                console.log(mainStAddress)

                let Contact = app.models.Contact

                Contact.create({
                    firstName: "Jim",
                    lastName: "Smith",
                    email: "jim@smith.com",
                    mobilePhone: "2345678900",
                    accountId: registeredUser.accountId
                }, function (err, jim) {

                    checkError(err)

                    console.log(jim)

                    Contact.create({
                        firstName: "Jane",
                        lastName: "Smith",
                        email: "jane@smith.com",
                        mobilePhone: "2345678800",
                        accountId: registeredUser.accountId
                    }, function (err, jane) {

                        checkError(err)

                        console.log(jane)

                        let Partnership = app.models.Partnership

                        Partnership.create({
                            name: "John and Jane Smith",
                        }, function (err, jjSmithPartnership) {

                            checkError(err)

                            console.log(jjSmithPartnership)

                            let Partner = app.models.Partner

                            Partner.create({
                                contactId: jim.id,
                                share: 0.5,
                                partnershipId: jjSmithPartnership.id,
                            }, function (err, jimPartner) {

                                checkError(err)
                                console.log("------------------------------------------------")
                                console.log(jimPartner)
                            })

                            Partner.create({
                                contactId: jane.id,
                                share: 0.5,
                                partnershipId: jjSmithPartnership.id,
                            }, function (err, janePartner) {
                                checkError(err)

                                console.log("------------------------------------------------")
                                console.log(janePartner)
                            })

                            let Owner = app.models.Owner

                            Owner.create({
                                purchaseDate: "2015-05-05",
                                ownerId: jjSmithPartnership.id,
                                assetId: mainStAddress.id
                            }, function (err, jjSmithMainStOwnership) {
                                checkError(err)

                                console.log(jjSmithMainStOwnership)

                                let Agent = app.models.Agent

                                Agent.create({
                                    firstName: "Abbey",
                                    lastName: "Agent",
                                    email: "abbey@gulfcoast.com",
                                    mobilePhone: "2235678900",
                                    mlsNumber: "357458473589473590",
                                    accountId: registeredUser.accountId
                                }, function (err, abbeyAgent) {
                                    checkError(err)

                                    console.log(abbeyAgent)

                                    let Listing = app.models.Listing

                                    const today = new Date()
                                    let oneYear = new Date()
                                    oneYear.setFullYear(oneYear.getFullYear() + 1)

                                    Listing.create({
                                        startDate: today,
                                        endDate: oneYear,
                                        sellerId: jjSmithMainStOwnership.id,
                                        mlsNumber: "4309584395423954",
                                        listerId: abbeyAgent.id,
                                        accountId: registeredUser.accountId
                                    }, function (err, mainStListing) {
                                        checkError(err)

                                        console.log(mainStListing)

                                        let ListingPrice = app.models.ListingPrice

                                        ListingPrice.create({ value: 350000, listingId: mainStListing.id }, function (err, price) {
                                            checkError(err)


                                        })
                                    })
                                })
                            })
                        })
                    })

                    Address.create({
                        street: "5678 Broad St",
                        street2: "Apt 90",
                        city: "Big City",
                        state: "MO",
                        zipcode: "98765",
                        accountId: registeredUser.accountId
                    }, function (err, address) {
                        if (err) {
                            console.log(err)
                            throw (err)
                        }

                        console.log(address)
                    })
                });

            });







        });
    });
}
                    /*          
                              
                                          let Event = app.models.Event;
                              
                                          let today = new Date();
                              
                                          let lastWeek = new Date(today);
                                          lastWeek.setDate(today.getDate() - 7);
                              
                                          console.log(registeredUser);
                              
                                          Event.create({ name: "Next Club Event", date: today, accountId: registeredUser.accountId }, function (err, eventInstance) {
                                              console.log(eventInstance);
                                          });
                              
                                          today.setMonth(today.getMonth() - 1);
                                          Event.create({ name: "Old Club Event", date: lastWeek, accountId: registeredUser.accountId, closed: true }, function (err, eventInstance) {
                                              console.log(eventInstance);
                                          });
                              
                                          let Member = app.models.Member;
                              
                                          Member.create({ firstName: "Jane", lastName: "ClubMember", email: "jane@jane.com", mobilePhone: "212-555-1234", membershipLevel: "Single", accountId: registeredUser.accountId }, function (err, memberInstance) {
                                              console.log(memberInstance);
                                          });
                              
                                          Member.create({ firstName: "Sam", lastName: "Sustainer", email: "jane@jane.com", mobilePhone: "212-555-1234", membershipLevel: "Sustaining", accountId: registeredUser.accountId }, function (err, memberInstance) {
                                              console.log(memberInstance);
                                          });
                              
                                          Member.create({ firstName: "Gary", lastName: "Guest", email: "jim@jim.com", mobilePhone: "212-555-5678", accountId: registeredUser.accountId }, function (err, memberInstance) {
                                              console.log(memberInstance);
                                          });
                              
                                          Member.create({ firstName: "Larry", lastName: "Lifetime", email: "larry@larry.com", mobilePhone: "212-555-9999", membershipLevel: "Lifetime", accountId: registeredUser.accountId }, function (err, memberInstance) {
                                              console.log(memberInstance);
                                          });
                                          */
