import { Router, type Request, type Response } from 'express';
const router = Router();

import HistoryService from '../../service/historyService.js';
import WeatherService from '../../service/weatherService.js';

// TODO: POST Request with city name to retrieve weather data
router.post('/', async (req: Request, res: Response) => {

  // TODO: GET weather data from city name
    const cityName = req.body.cityName;
    const weatherData = await WeatherService.getWeatherForCity(cityName)
    await HistoryService.addCity(cityName)
    res.json(weatherData)
});


// TODO: GET search history
router.get('/history', async (_req: Request, res: Response) => {
    res.json(await HistoryService.getCities())
});


// DELETE city from search history
router.delete('/history/:id', async (req: Request, res: Response) => {
    try {
        if (!req.params.id) {
          res.status(400).json({ msg: 'City id is required' });
        }
        await HistoryService.removeCity(req.params.id);
        res.json({ success: 'City successfully removed from search history' });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
});


export default router;
