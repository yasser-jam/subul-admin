export default (url: string, options?: any) => {
    const baseUrl = "https://freelancer-l1w8.onrender.com/api";
  
    const token = useCookie('admin_access_token')
  
    return $fetch(`${baseUrl}/${url}`, {
      headers: {
        'Authorization': `Bearer ${token.value}`
        // Include other necessary headers
      },
  
      ...options,
    }) as any;
  };
  