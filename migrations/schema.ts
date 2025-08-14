import { pgTable, uuid, timestamp, text, foreignKey } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const workspaces = pgTable("workspaces", {
	id: uuid().primaryKey().notNull(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }),
	workspaceOwner: uuid("workspace_owner").notNull(),
	title: text().notNull(),
	iconId: text("icon_id").notNull(),
	data: text(),
	inTrash: text("in_trash"),
	logo: text(),
	bannerUrl: text("banner_url"),
});

export const files = pgTable("files", {
	id: uuid().primaryKey().notNull(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }),
	title: text().notNull(),
	iconId: text("icon_id").notNull(),
	data: text(),
	inTrash: text("in_trash"),
	logo: text(),
	bannerUrl: text("banner_url"),
	workspaceId: uuid("workspace_id").notNull(),
	folderId: uuid("folder_id").notNull(),
}, (table) => [
	foreignKey({
			columns: [table.folderId],
			foreignColumns: [folders.id],
			name: "files_folder_id_folders_id_fk"
		}).onDelete("cascade"),
	foreignKey({
			columns: [table.workspaceId],
			foreignColumns: [workspaces.id],
			name: "files_workspace_id_workspaces_id_fk"
		}).onDelete("cascade"),
]);

export const folders = pgTable("folders", {
	id: uuid().primaryKey().notNull(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }),
	title: text().notNull(),
	iconId: text("icon_id").notNull(),
	data: text(),
	inTrash: text("in_trash"),
	logo: text(),
	bannerUrl: text("banner_url"),
	workspaceId: uuid("workspace_id").notNull(),
}, (table) => [
	foreignKey({
			columns: [table.workspaceId],
			foreignColumns: [workspaces.id],
			name: "folders_workspace_id_workspaces_id_fk"
		}).onDelete("cascade"),
]);
