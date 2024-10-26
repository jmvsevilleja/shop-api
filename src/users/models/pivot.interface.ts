// src/users/models/pivot.interface.ts
export interface Pivot {
    model_id: number;        // The ID of the model (e.g., User ID)
    permission_id: number;   // The ID of the permission
    model_type: string;      // The type of the model (e.g., "Marvel\\Database\\Models\\User")
  }