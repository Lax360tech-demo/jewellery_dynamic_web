import React, { useState } from 'react';
import { Gem, Layers } from 'lucide-react';
import { JewelleryManagement } from './JewelleryManagement';
import { CollectionsManagement } from './CollectionsManagement';
import { useJewellery } from '../context/JewelleryContext';

export const ProductsCollectionsManagement = ({ initialSubTab = 'designs' }) => {
  const [subTab, setSubTab] = useState(initialSubTab);
  const { designs, collections } = useJewellery();

  return (
    <div className="admin-products-collections-tab">
      {/* Sub-navigation Switcher */}
      <div style={{
        display: 'flex',
        gap: '10px',
        marginBottom: '20px',
        flexWrap: 'wrap'
      }}>
        <button
          type="button"
          onClick={() => setSubTab('designs')}
          className={`filter-chip ${subTab === 'designs' ? 'active' : ''}`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 18px',
            fontSize: '0.84rem'
          }}
        >
          <Gem size={15} />
          <span>Jewellery Designs & Products ({designs.length})</span>
        </button>

        <button
          type="button"
          onClick={() => setSubTab('collections')}
          className={`filter-chip ${subTab === 'collections' ? 'active' : ''}`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 18px',
            fontSize: '0.84rem'
          }}
        >
          <Layers size={15} />
          <span>Jewellery Collections ({collections.length})</span>
        </button>
      </div>

      {subTab === 'designs' ? <JewelleryManagement /> : <CollectionsManagement />}
    </div>
  );
};
