import RoleModel from "../RoleModel";
export interface GuildOptions {
    attribute1?: number | null;
    attribute2?: number | null;
    attribute3?: number | null;
    attribute4?: number | null;
    attribute5?: number | null;
    metadata?: string | null;
    memberMetadata?: string | null;
    customRoles?: RoleModel[] | null;
    guildMemberDefaultRole?: string | null;
    timeOffsetToken?: string | null;
}
