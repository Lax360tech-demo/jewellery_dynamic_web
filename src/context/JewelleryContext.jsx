import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  INITIAL_COLLECTIONS,
  INITIAL_DESIGNS,
  INITIAL_ENQUIRIES,
  INITIAL_APPOINTMENTS,
  INITIAL_CUSTOM_REQUESTS,
  SERVICES,
  DEFAULT_SETTINGS
} from '../data/mockData';

const JewelleryContext = createContext();

export const useJewellery = () => {
  const context = useContext(JewelleryContext);
  if (!context) {
    throw new Error('useJewellery must be used within a JewelleryProvider');
  }
  return context;
};

export const JewelleryProvider = ({ children }) => {
  // 1. Collections state with localStorage
  const [collections, setCollections] = useState(() => {
    try {
      const saved = localStorage.getItem('lax360_collections_v3');
      return saved ? JSON.parse(saved) : INITIAL_COLLECTIONS;
    } catch {
      return INITIAL_COLLECTIONS;
    }
  });

  // 2. Designs state with localStorage
  const [designs, setDesigns] = useState(() => {
    try {
      const saved = localStorage.getItem('lax360_designs_v3');
      return saved ? JSON.parse(saved) : INITIAL_DESIGNS;
    } catch {
      return INITIAL_DESIGNS;
    }
  });

  // 3. Enquiries state
  const [enquiries, setEnquiries] = useState(() => {
    try {
      const saved = localStorage.getItem('lax360_enquiries');
      return saved ? JSON.parse(saved) : INITIAL_ENQUIRIES;
    } catch {
      return INITIAL_ENQUIRIES;
    }
  });

  // 4. Appointments state
  const [appointments, setAppointments] = useState(() => {
    try {
      const saved = localStorage.getItem('lax360_appointments');
      return saved ? JSON.parse(saved) : INITIAL_APPOINTMENTS;
    } catch {
      return INITIAL_APPOINTMENTS;
    }
  });

  // 5. Custom Requests state
  const [customRequests, setCustomRequests] = useState(() => {
    try {
      const saved = localStorage.getItem('lax360_custom_requests_v2');
      return saved ? JSON.parse(saved) : INITIAL_CUSTOM_REQUESTS;
    } catch {
      return INITIAL_CUSTOM_REQUESTS;
    }
  });

  // 6. Services state
  const [services, setServices] = useState(() => {
    try {
      const saved = localStorage.getItem('lax360_services_v2');
      return saved ? JSON.parse(saved) : SERVICES;
    } catch {
      return SERVICES;
    }
  });

  // 7. Settings state
  const [settings, setSettings] = useState(() => {
    try {
      const saved = localStorage.getItem('lax360_settings_v2');
      return saved ? JSON.parse(saved) : DEFAULT_SETTINGS;
    } catch {
      return DEFAULT_SETTINGS;
    }
  });

  // Global Enquiry Modal State
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [enquiryModalData, setEnquiryModalData] = useState(null);

  // Global Appointment Modal State
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('lax360_collections_v3', JSON.stringify(collections));
  }, [collections]);

  useEffect(() => {
    localStorage.setItem('lax360_designs_v3', JSON.stringify(designs));
  }, [designs]);

  useEffect(() => {
    localStorage.setItem('lax360_enquiries', JSON.stringify(enquiries));
  }, [enquiries]);

  useEffect(() => {
    localStorage.setItem('lax360_appointments', JSON.stringify(appointments));
  }, [appointments]);

  useEffect(() => {
    localStorage.setItem('lax360_custom_requests_v2', JSON.stringify(customRequests));
  }, [customRequests]);

  useEffect(() => {
    localStorage.setItem('lax360_services_v2', JSON.stringify(services));
  }, [services]);

  useEffect(() => {
    localStorage.setItem('lax360_settings_v2', JSON.stringify(settings));
  }, [settings]);

  // Design Management Actions
  const addDesign = (newDesign) => {
    const id = Date.now();
    const created = { ...newDesign, id };
    setDesigns((prev) => [created, ...prev]);
    return created;
  };

  const updateDesign = (id, updatedData) => {
    setDesigns((prev) =>
      prev.map((item) => (item.id === id || item.code === id ? { ...item, ...updatedData } : item))
    );
  };

  const deleteDesign = (id) => {
    setDesigns((prev) => prev.filter((item) => item.id !== id && item.code !== id));
  };

  const toggleFeatured = (id) => {
    setDesigns((prev) =>
      prev.map((item) => (item.id === id ? { ...item, isFeatured: !item.isFeatured } : item))
    );
  };

  const toggleNew = (id) => {
    setDesigns((prev) =>
      prev.map((item) => (item.id === id ? { ...item, isNew: !item.isNew } : item))
    );
  };

  // Collection Management Actions
  const addCollection = (newCollection) => {
    const created = {
      ...newCollection,
      id: newCollection.id || newCollection.title.toLowerCase().replace(/\s+/g, '-'),
      active: true,
      order: collections.length + 1
    };
    setCollections((prev) => [...prev, created]);
    return created;
  };

  const updateCollection = (id, updatedData) => {
    setCollections((prev) =>
      prev.map((col) => (col.id === id ? { ...col, ...updatedData } : col))
    );
  };

  const toggleCollectionActive = (id) => {
    setCollections((prev) =>
      prev.map((col) => (col.id === id ? { ...col, active: !col.active } : col))
    );
  };

  // Service Management Actions
  const addService = (newService) => {
    const id = newService.id || `srv-${Date.now()}`;
    const created = { ...newService, id };
    setServices((prev) => [...prev, created]);
    return created;
  };

  const updateService = (id, updatedData) => {
    setServices((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updatedData } : item))
    );
  };

  const deleteService = (id) => {
    setServices((prev) => prev.filter((item) => item.id !== id));
  };

  // Settings Management Actions
  const updateSettings = (updatedData) => {
    setSettings((prev) => ({ ...prev, ...updatedData }));
  };

  // Enquiry Actions
  const addEnquiry = (enquiryData) => {
    const newEnquiry = {
      ...enquiryData,
      id: `ENQ-${Math.floor(100 + Math.random() * 900)}`,
      date: new Date().toISOString().split('T')[0],
      status: 'New'
    };
    setEnquiries((prev) => [newEnquiry, ...prev]);
    return newEnquiry;
  };

  const updateEnquiryStatus = (id, newStatus) => {
    setEnquiries((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );
  };

  const deleteEnquiry = (id) => {
    setEnquiries((prev) => prev.filter((item) => item.id !== id));
  };

  // Appointment Actions
  const addAppointment = (appointmentData) => {
    const newAppointment = {
      ...appointmentData,
      id: `APT-${Math.floor(100 + Math.random() * 900)}`,
      status: 'New'
    };
    setAppointments((prev) => [newAppointment, ...prev]);
    return newAppointment;
  };

  const updateAppointmentStatus = (id, newStatus) => {
    setAppointments((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );
  };

  const deleteAppointment = (id) => {
    setAppointments((prev) => prev.filter((item) => item.id !== id));
  };

  // Custom Request Actions
  const addCustomRequest = (requestData) => {
    const newRequest = {
      ...requestData,
      id: `CST-${Math.floor(100 + Math.random() * 900)}`,
      date: new Date().toISOString().split('T')[0],
      status: 'Under Review'
    };
    setCustomRequests((prev) => [newRequest, ...prev]);
    return newRequest;
  };

  const updateCustomRequestStatus = (id, newStatus) => {
    setCustomRequests((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );
  };

  const deleteCustomRequest = (id) => {
    setCustomRequests((prev) => prev.filter((item) => item.id !== id));
  };

  // Reset to Defaults
  const resetToDefaults = () => {
    setCollections(INITIAL_COLLECTIONS);
    setDesigns(INITIAL_DESIGNS);
    setEnquiries(INITIAL_ENQUIRIES);
    setAppointments(INITIAL_APPOINTMENTS);
    setCustomRequests(INITIAL_CUSTOM_REQUESTS);
    setServices(SERVICES);
    setSettings(DEFAULT_SETTINGS);
    localStorage.removeItem('lax360_collections_v3');
    localStorage.removeItem('lax360_designs_v3');
    localStorage.removeItem('lax360_enquiries');
    localStorage.removeItem('lax360_appointments');
    localStorage.removeItem('lax360_custom_requests_v2');
    localStorage.removeItem('lax360_services_v2');
    localStorage.removeItem('lax360_settings_v2');
  };

  // Modal controls
  const openEnquiryModal = (data = null) => {
    setEnquiryModalData(data);
    setIsEnquiryModalOpen(true);
  };

  const closeEnquiryModal = () => {
    setIsEnquiryModalOpen(false);
    setEnquiryModalData(null);
  };

  const openAppointmentModal = () => {
    setIsAppointmentModalOpen(true);
  };

  const closeAppointmentModal = () => {
    setIsAppointmentModalOpen(false);
  };

  return (
    <JewelleryContext.Provider
      value={{
        collections,
        designs,
        enquiries,
        appointments,
        customRequests,
        services,
        settings,
        addDesign,
        updateDesign,
        deleteDesign,
        toggleFeatured,
        toggleNew,
        addCollection,
        updateCollection,
        toggleCollectionActive,
        addService,
        updateService,
        deleteService,
        updateSettings,
        addEnquiry,
        updateEnquiryStatus,
        deleteEnquiry,
        addAppointment,
        updateAppointmentStatus,
        deleteAppointment,
        addCustomRequest,
        updateCustomRequestStatus,
        deleteCustomRequest,
        resetToDefaults,
        isEnquiryModalOpen,
        enquiryModalData,
        openEnquiryModal,
        closeEnquiryModal,
        isAppointmentModalOpen,
        openAppointmentModal,
        closeAppointmentModal
      }}
    >
      {children}
    </JewelleryContext.Provider>
  );
};

