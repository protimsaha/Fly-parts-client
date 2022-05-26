import React from 'react';
import mySelf from '../../image/IMG_20210906_152158-01.jpeg'

const Portfolio = () => {
    return (
        <div>
            <div class="hero min-h-screen   bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <div>
                        <img className='w-96 shrink-0 rounded-xl' src={mySelf} alt='' />
                    </div>
                    <div>
                        <h1 className='text-4xl font-semibold'>Puspok Protim Saha</h1>
                        <p>Email : protimsaha750@gmail.com</p>
                        <div class="overflow-x-auto">
                            <h2 className='text-2xl mt-10'>Educational background</h2>
                            <div className=''>
                                <div className='overflow-x-hidden'>
                                    <table class="table table-zebra w-96  sm:max-w-sm">
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th>Result</th>
                                                <th>Examination</th>
                                                <th>Passing Year</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr>
                                                <th>1</th>
                                                <td>Currently studing</td>
                                                <td>Bsc in Aeronautical Engineering</td>
                                                <td>Second year continue </td>
                                            </tr>

                                            <tr>
                                                <th>2</th>
                                                <td>GPA 5.0</td>
                                                <td>H.S.C</td>
                                                <td>2019</td>
                                            </tr>

                                            <tr>
                                                <th>3</th>
                                                <td>GPA 4.83</td>
                                                <td>S.S.C</td>
                                                <td>2017</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className='mt-5'>
                                    <h2 className='text-2xl text-slate-600 font-medium'>Technologies I know :</h2>
                                    <div className='text-xl font-medium'>
                                        <p>1.HTML5</p>
                                        <p>2.CSS3</p>
                                        <p>3.Bootstrap</p>
                                        <p>4.Tailwind Css</p>
                                        <p>5.JavaScript</p>
                                        <p>6.React js</p>
                                        <p>7.Firebase</p>
                                        <p>8.Node js</p>
                                        <p>9.Express js</p>
                                        <p>10.MongoDB</p>
                                    </div>
                                    <div>
                                        <h1>My 3 Projetcs</h1>
                                        <p>https://assignment-11-eb5e6.web.app/</p>
                                        <p>https://assignment-10-6ef43.web.app/</p>
                                        <p>https://ema-john-simple-7685e.web.app/</p>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;