export type EntityId = string;
export type ISODateTime = string;

export type UserRole = "platform_admin" | "organization_admin" | "member";

export type AuditFields = Readonly<{
  createdAt: ISODateTime;
  updatedAt: ISODateTime;
}>;

export type Profile = AuditFields &
  Readonly<{
    id: EntityId;
    displayName: string;
    role: UserRole;
  }>;

export type Organization = AuditFields &
  Readonly<{
    id: EntityId;
    name: string;
    ownerProfileId: EntityId;
  }>;
