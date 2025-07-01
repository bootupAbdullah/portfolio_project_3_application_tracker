const show = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}`, {
        credentials: 'include'
      });
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
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(newApplication)
        });

        if (response.ok) {
            const applicationResult = await response.json();
            console.log('Post Successful:', applicationResult);
            return applicationResult;
        } else {
            console.error('Failed to register application:', response.status, response.statusText);
        }
    } catch (error) {
        console.error('Error during fetch operation:', error);
    }
};

const putRequest = async (id, updatedApplication) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(updatedApplication)
        });

        if (response.ok) {
            const updatedResult = await response.json();
            console.log('Update Successful:', updatedResult);
            return updatedResult;
        } else {
            console.error('Failed to update application:', response.status, response.statusText);
        }
    } catch (error) {
        console.error('Error during fetch operation:', error);
    }
};

const deleteRequest = async (application, setPage, fetchData) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/${application.id}`,
             {
            method: 'DELETE',
            credentials: 'include'

        });
        if (response.ok) {
            await fetchData()
            setPage('Dashboard')
        } else {
            console.log('deleteRequest, applicationServices.js has failed.')
        }
    } catch (err) {
        console.log(err);
    }
}

const resetApplications = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/reset`, {
        method: 'DELETE',
        credentials: 'include' //Important: sends cookies
    });
    if (!response.ok) throw new Error('Reset failed');
    return response.json();
};



export { show, postNewApplication, putRequest, deleteRequest, resetApplications};