const BASE_URL = `http://localhost:5150/application`;

const show = async () => {
    try {
      const res = await fetch(BASE_URL);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      console.log('Data:', data);
      return data;
    } catch (err) {
      console.error('Error fetching data:', err);
    }
};

const postNewApplication = async (newApplication) => {
    try {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newApplication)
        });

        if (response.ok) {
            const applicationResult = await response.json();
            console.log('Post Successful:', applicationResult);
        } else {
            // Handle non-successful responses
            console.error('Failed to register application:', response.status, response.statusText);
        }
    } catch (error) {
        console.error('Error during fetch operation:', error);
    }
};

export { show, postNewApplication };
