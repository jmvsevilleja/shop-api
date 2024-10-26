// src/users/models/wallet.interface.ts
export interface Wallet {
    id: number;                // The ID of the wallet
    total_points: number;      // Total points in the wallet
    points_used: number;       // Points that have been used
    available_points: number;  // Points available for use
    customer_id: number;       // ID of the associated customer
    created_at: Date;          // Timestamp of wallet creation
    updated_at: Date;          // Timestamp of last update
  }