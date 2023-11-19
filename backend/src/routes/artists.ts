import express from "express";

const router = express.Router();

router.get('/:artist', (req, res) => {
    const { artist } = req.params

    if (artist === "coldplay") {
        res.json({
            "items": [
                {
                    "id": "0p9tTwtglBt96GxdQ1WeuO",
                    "name": "Parachutes",
                    "release_date": "2000-07-10",
                    "total_tracks": 10,
                    "images": [
                        {
                            "url": "https://example.com/parachutes_cover.jpg",
                            "width": 300,
                            "height": 300
                        }
                    ]
                },
                {
                    "id": "4EVpmkEwrLYEg6jIsiPMIb",
                    "name": "A Rush of Blood to the Head",
                    "release_date": "2002-08-26",
                    "total_tracks": 11,
                    "images": [
                        {
                            "url": "https://example.com/a_rush_of_blood_cover.jpg",
                            "width": 300,
                            "height": 300
                        }
                    ]
                },
            ]
        })
    } else {
        res.json({ items: [] })
    }
})

export default router